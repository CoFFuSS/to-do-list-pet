import { useState } from "react";
import { Task } from "../Task";
import { TaskList } from "./styled";
import { TaskCreate } from "../App/TaskForm";
import { TaskItem } from '../../utils/types';

export const GeneralContent = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);

  return (
    <>
      <TaskList>
        {tasks.map(({ id, task }) => (
          <Task key={id} task={task} />
        ))}
        <TaskCreate tasks={tasks} setTasks={setTasks} />
      </TaskList>
    </>
  );
};
