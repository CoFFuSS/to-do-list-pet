import { useContext } from "react";
import { TaskListContext } from "../../context/globalContext";
import { TaskItem } from "../../utils/types";

export const Task = ({ id, task }: TaskItem) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData("text", event.currentTarget.id);
  };

  const { tasks, setTasks } = useContext(TaskListContext);

  const handleDelete = () => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div draggable="true" onDragStart={handleDragStart}>
      <button onClick={handleDelete}>Удали </button>
      {task}
    </div>
  );
};
