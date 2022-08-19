import { useMutation } from '@tanstack/react-query';
import authService from '@services/auth.service';
import { KEY } from './index';
export default () => {
  const query = useMutation([KEY], authService.signup.bind(authService));
  return { ...query, signup: query.mutateAsync };
};
