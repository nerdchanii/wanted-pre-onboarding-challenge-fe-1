import { atom, selector } from "recoil";
// auth Atom

interface IauthState {
    email: string;
  }


export const authState = atom<IauthState|null>({
  key: "authState",
  default: null,
});

export const isLoggedIn = selector({
  key: "isLoggedIn",
  get: ({ get }) => {
    const auth = get(authState);
    return auth !== null;
  }
});
