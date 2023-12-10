import { useState } from "react";
import { Task } from "../Task";
import { TaskList } from "./styled";
import { TaskCreate } from "../App/TaskForm";
import { TaskItem } from "../../utils/types";
import { TaskListContext } from "../../context/globalContext";

export const GeneralContent = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  const enableDropping = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    console.log(`Somebody dropped an element with id: ${id}`);
  };
  return (
    <>
      <TaskListContext.Provider value={{ tasks, setTasks }}>
        <TaskList onDragOver={enableDropping} onDrop={handleDrop}>
          {tasks.map(({ id, task }) => (
            <Task key={id} task={task} id={id} />
          ))}
          {/* <TaskCreate tasks={tasks} setTasks={setTasks} /> */}
          <TaskCreate />
        </TaskList>
      </TaskListContext.Provider>
    </>
  );
};
