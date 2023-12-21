import { useId, useState } from "react";
import { TaskItem } from "../../utils/types";
import { CreateTask, CreateTaskButton, CreateTaskInput, TextInput } from "./styled";


interface TaskCreateProps {
  tasks: TaskItem[];
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}


export const TaskCreate = ({ tasks, setTasks }: TaskCreateProps) => {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");

  const createTask = (text: string) => {
    const newTask: TaskItem = {
      id: +tasks.length,
      text: text,
    };
    setTasks((tasks) => [...tasks, newTask]);
  };

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = () => {
    createTask(text);
    setText("");
    setShowForm(!showForm);
  };

  const id = useId();

  return (
    <CreateTask>
      {showForm ? (
        <CreateTaskInput>
          <label htmlFor={id}>
            <TextInput
            id={id}
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            />
            <span className='placeholder'>Enter task text</span>
          </label>
          
          <button onClick={() => handleSubmit()}>Create Task</button>
        </CreateTaskInput>
      ) : (
        <CreateTaskButton onClick={handleButtonClick}>
          Create Task
        </CreateTaskButton>
      )}
    </CreateTask>
  );
};
