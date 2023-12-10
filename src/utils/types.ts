// import { Dispatch } from "react";

// export type ContextState = {
//   state: State;
//   changeState: Dispatch<Action>;
// };

// export type State = {
//   newTask: string;
//   tasks: { text: string[] };
// };

// export enum Action {
//   ADD = "ADD",
//   CHANGE = "CHANGE",
//   DELETE = "DELETE",
// }

// export type ActionStringPayload = {
//   type: Action.ADD | Action.CHANGE | Action.DELETE;
//   payload: string;
// };

export interface TaskItem {
  id: number;
  task: string;
}

export interface ChildProps {
  tasks: TaskItem[];
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}