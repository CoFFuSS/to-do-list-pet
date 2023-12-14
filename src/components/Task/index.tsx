import { TaskProps } from "../../utils/types";
import { DeleteButton } from "./styled";

export const Task = ({ onDelete, text }: TaskProps) => {
  return (
    <>
      <DeleteButton onClick={onDelete}></DeleteButton>
      {text}
    </>
  );
};
