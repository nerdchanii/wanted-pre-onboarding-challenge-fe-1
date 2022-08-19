import { useMutation } from '@tanstack/react-query';
import { authState } from '@/store/authState';
import authService from '@services/auth.service';
import { useSetRecoilState } from 'recoil';
import { getTokenData } from '@/utils/jwt';
import { KEY } from './index';

export default () => {
  const setAuth = useSetRecoilState(authState);
  const query = useMutation([KEY], authService.login.bind(authService), {
    onSuccess: (data) => {
      const token = localStorage.getItem('token');
      if (token) setAuth(getTokenData(token));
      return true;
    },
  });
  return { ...query, login: query.mutateAsync };
};
