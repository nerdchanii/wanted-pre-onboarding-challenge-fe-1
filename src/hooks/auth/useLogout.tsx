import { authState } from '@/store/authState';
import authService from '@services/auth.service';
import { useSetRecoilState } from 'recoil';

export default () => {
  const setAuth = useSetRecoilState(authState);
  return () => {
    authService.logout.bind(authService);
    setAuth(null);
  };
};
