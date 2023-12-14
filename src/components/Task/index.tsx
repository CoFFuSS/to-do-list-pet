import { TaskProps } from "../../utils/types";

export const Task = ({ onDelete, text }: TaskProps) => {
  return (
    <>
      <button onClick={onDelete}>Удали </button>
      {text}
    </>
  );
};
