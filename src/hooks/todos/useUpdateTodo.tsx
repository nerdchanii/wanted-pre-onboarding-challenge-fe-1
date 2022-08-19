import todoService from '@/services/todo.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { KEY } from './index';

export default (id: string) => {
  const queryClinet = useQueryClient();
  return useMutation([KEY, id], todoService.updateTodo.bind(todoService), {
    onSuccess: (data) => {
      queryClinet.invalidateQueries([KEY, id]);
      queryClinet.invalidateQueries([KEY]);
      console.log('success', data);
    },
    onError: (error) => {
      console.error('error', error);
    },
    onMutate: (data) => {
      console.log('mutate', data);
    },
  });
};
