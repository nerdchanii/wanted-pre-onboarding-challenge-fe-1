import { atom } from "recoil";
import {Todo} from '../Apis/types';


const todosState = atom<Todo[]>({
  key: "todosState",
  default: Array<Todo>(),
})


export default todosState;