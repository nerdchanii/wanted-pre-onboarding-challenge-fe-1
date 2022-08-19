import todoService from '@/services/todo.service';
import { useQuery } from '@tanstack/react-query';

import { KEY } from './index';

export default () => {
  const query = useQuery([KEY], todoService.getTodos, {
    suspense: true,
  });

  return { ...query, todos: query.data };
};
