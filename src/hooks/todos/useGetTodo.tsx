import { Todo } from '@/apis/types';
import todoService from '@/services/todo.service';
import { useQuery } from '@tanstack/react-query';
import { KEY } from './index';

export default (id: string) => {
  return useQuery<Todo, { data: { details: string } }, Todo>(
    [KEY, id],
    todoService.getTodoById.bind(todoService, id),
    {
      suspense: true,
      onError: (error) => {
        console.log('error', error);
      },
    },
  );
};
