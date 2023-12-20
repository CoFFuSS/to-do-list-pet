import React, { useState } from "react";
import { DragDiv, TaskList } from "./styled";
import { TaskCreate } from "../TaskForm";
import { TaskItem } from "../../utils/types";
import { Task } from "../Task";

export const GeneralContent = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [currentTask, setCurrentTask] = useState<TaskItem>({} as TaskItem);
  const [currentPosX, setCurrentPosX] = useState(Number);

  const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;
    if (target.id == "item") {
      target.style.boxShadow = "0 4px 3px gray";
    }
  };

  const dragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.boxShadow = "none";
  };

  const dragStartHandler = (
    e: React.DragEvent<HTMLDivElement>,
    task: TaskItem
  ) => {
    const { clientX, clientY } = e;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setCurrentPosX((_currentPosX) => clientX);
    console.log(clientX, clientY);
    setCurrentTask(task);
  };

  const dragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.style.boxShadow = "none";
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>, task: TaskItem) => {
    e.preventDefault();
    const dropIndex = tasks.indexOf(task);

    const { clientX, clientY } = e;
    console.log(clientX, clientY);
    console.log(currentPosX);
    if (Math.abs(clientX - currentPosX) > 500) {
      handleDelete(task.id); // может быть необходимо изменить под callback
    } else {
      setTasks((prevItems) => {
        const newTasks = prevItems.filter((item) => item !== currentTask);
        newTasks.splice(dropIndex, 0, currentTask);
        return newTasks;
      });
    }
  };

  const handleDelete = (id: number) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  // const handleEdit = ()

  return (
    <TaskList>
      {tasks.map((task) => (
        <DragDiv
          id="item"
          className="item"
          key={task.id}
          // onClick={() => handleEdit()}
          draggable
          onDragOver={(e) => dragOverHandler(e)}
          onDragLeave={(e) => dragLeaveHandler(e)}
          onDragStart={(e) => dragStartHandler(e, task)}
          onDragEnd={(e) => dragEndHandler(e)}
          onDrop={(e) => dropHandler(e, task)}
        >
          <Task
            onDelete={() => handleDelete(task.id)}
            key={task.id}
            text={task.text}
          />
        </DragDiv>
      ))}
      <TaskCreate tasks={tasks} setTasks={setTasks} />
    </TaskList>
  );
};
