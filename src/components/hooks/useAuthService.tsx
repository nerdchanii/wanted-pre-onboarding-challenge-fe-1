import { InterfaceAuthenticationRequest } from "../../Apis/types";
import { useSetRecoilState } from "recoil";
import { authState } from "../../store/authState";
import { useCallback, useState } from "react";
import authService from "../../services/auth.service";

type UseAuthServiceReturn = [
  boolean,
  (
    data: InterfaceAuthenticationRequest
  ) => Promise<{ result: boolean; message: any }>
];
type UseAuthService = (type: "login" | "signup") => UseAuthServiceReturn;

const useAuthService: UseAuthService = (type) => {
  const setAuthState = useSetRecoilState(authState);

  const [loading, setLoading] = useState<boolean>(false);

  const apis =
    type === "login"
      ? authService.login.bind(authService)
      : authService.signup.bind(authService);

  const actions = useCallback(
    async ({ email, password }: InterfaceAuthenticationRequest) => {
      setLoading(true);
      const reponse = await apis({ email, password });
      const { result, token, message } = reponse;
      if (result) setAuthState({ email, token });
      setLoading(false);
      return { result, message };
    },
    [setAuthState, apis]
  );

  return [loading, actions];
};

export default useAuthService;
