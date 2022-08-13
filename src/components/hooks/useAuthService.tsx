import {
  InterfaceAuthenticationRequest,
  InterfaceAuthServiceReturn,
} from "../../Apis/types";
import { useSetRecoilState } from "recoil";
import { authState } from "../../store/authState";
import { useCallback, useState } from "react";
import authService from "../../services/auth.service";

type AuthServiceMethod = "login" | "signup" | "logout";

interface UseAuthService {
  (method: AuthServiceMethod): [boolean, Function];
}

const useAuthService: UseAuthService = (type: AuthServiceMethod) => {
  const setAuthState = useSetRecoilState(authState);
  const [loading, setLoading] = useState<boolean>(false);

  const login = useCallback(
    async (formData: InterfaceAuthenticationRequest) => {
      const response = await call<InterfaceAuthServiceReturn>(
        authService.login.bind(authService),
        formData
      );
      if (response.result) setAuthState({ email: formData.email });
      return response;
    },
    [setAuthState]
  );

  const signup = useCallback(
    async (formData: InterfaceAuthenticationRequest) => {
      const response = await call<InterfaceAuthServiceReturn>(
        authService.signup.bind(authService),
        formData
      );
      if (response.result) setAuthState({ email: formData.email });
      return response;
    },
    [setAuthState]
  );

  const logout = useCallback(() => {
    authService.logout();
    setAuthState(null);
  }, [setAuthState]);

  const call = async <T,>(api: Function, data: any): Promise<T> => {
    setLoading(true);
    const response = await api(data);
    setLoading(false);
    return response;
  };

  switch (type) {
    case "login":
      return [loading, login];
    case "signup":
      return [loading, signup];
    case "logout":
      return [loading, logout];
  }
};

export default useAuthService;
