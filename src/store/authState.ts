import { atom, selector } from 'recoil';
import { getTokenData } from '@utils/jwt';
// auth Atom

interface IauthState {
  email: string;
}

const defaultState = () => {
  const token = localStorage.getItem('token');
  if (token) return { email: getTokenData(token) };
  return null;
};

export const authState = atom<IauthState | null>({
  key: 'authState',
  default: defaultState(),
});

export const isLoggedIn = selector({
  key: 'isLoggedIn',
  get: ({ get }) => {
    const auth = get(authState);
    return auth !== null;
  },
});
