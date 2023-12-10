interface TaskProps {
  task: string;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  return <li>{task}</li>;
};
