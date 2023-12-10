// import React, { useState } from "react";
// export const GlobalContext = React.createContext({
//   currentTheme: "",
//   themeSwitchHandler: () => {},
// });
// const GlobalContextProvider = (props) => {
//   const [currentTheme, setCurrentTheme] = useState(
//     window.localStorage.getItem("theme") == null
//       ? "light"
//       : window.localStorage.getItem("theme")
//   );
//   const themeSwitchHandler = (themeType) => {
//     setCurrentTheme(themeType);
//   };
//   return (
//     <GlobalContext.Provider
//       value={{
//         theme: currentTheme,
//         themeSwitchHandler: themeSwitchHandler,
//       }}
//     >
//       {props.children}
//     </GlobalContext.Provider>
//   );
// };
// export default GlobalContextProvider;

import React, { createContext } from 'react';
import { TaskItem } from '../utils/types';




export const TaskListContext = createContext<{
  tasks: TaskItem[];
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}>({
  tasks: [],
  setTasks: () => {},
});