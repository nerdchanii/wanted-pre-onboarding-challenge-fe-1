import todoService from '@services/todo.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { KEY } from './index';

export default (id: string) => {
  const queryClinet = useQueryClient();
  return useMutation<null, { data: { details: string } }>(
    [KEY, id],
    todoService.deleteTodo.bind(todoService, id),
    {
      onSuccess: (data) => {
        queryClinet.invalidateQueries([KEY, id]);
        queryClinet.invalidateQueries([KEY]);
        console.log('success', data);
        return true;
      },
      onError: (error) => {
        console.log('error', error);
      },
    },
  );
};
