import { useState } from "react";
import { ChildProps, TaskItem } from "../../utils/types";

export const TaskCreate = ({ tasks, setTasks }: ChildProps) => {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");

  const createTask = (text: string) => {
    const newTask: TaskItem = {
      id: +tasks.length,
      order: +tasks.length,
      text: text,
    };
    setTasks((tasks) => [...tasks, newTask]);
    // setTasks([...tasks, newTask]); // callback
  };

  const handleButtonClick = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    createTask(text);
    setText("");
    setShowForm(!showForm);
  };
  return (
    <>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button type="submit">Create Task</button>
        </form>
      ) : (
        <button onClick={handleButtonClick}>Create Task</button>
      )}
    </>
  );
};
