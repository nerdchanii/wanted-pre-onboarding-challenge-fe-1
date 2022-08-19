import todoService from '@/services/todo.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { KEY } from './index';

export default () => {
  const queryClinet = useQueryClient();
  return useMutation([KEY], todoService.createTodo.bind(todoService), {
    onSuccess: (data) => {
      queryClinet.invalidateQueries([KEY]);
      console.log('success', data);
    },
    onError: (error) => {
      console.error('error', error);
    },
  });
};
