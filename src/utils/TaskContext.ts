// import React from "react";
// import { Action, ActionStringPayload, ContextState, State } from "./types";

// export const initialState: State = {
//   newTask: "",
//   tasks: { text: [] },
// };

// export const TaskContext = React.createContext<Partial<ContextState>>;

// export const ToDoReducer = (
//   state: State,
//   action: ActionStringPayload
// ): State => {
//   switch (action.type) {
//     case Action.ADD:
//       return { ...state, tasks: [...state.tasks, { text: action.payload }] };
//     case Action.CHANGE:
//       return {};
//     case Action.DELETE:
//       return {};
//     default:
//       throw new Error("Unexpected Error");
//   }
// };
