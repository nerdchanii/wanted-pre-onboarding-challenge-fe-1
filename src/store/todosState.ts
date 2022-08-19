import { atom } from 'recoil';
import { Todo } from '@apis/types';

const todosState = atom<Todo[]>({
  key: 'todosState',
  default: Array<Todo>(),
});

export default todosState;
