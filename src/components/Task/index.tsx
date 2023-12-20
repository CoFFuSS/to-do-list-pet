import { TaskProps } from "../../utils/types";
import { DeleteButton, TextContent } from "./styled";

export const Task = ({ onDelete, text }: TaskProps) => {
  return (
    <>
      <DeleteButton onClick={onDelete}></DeleteButton>
      <TextContent>{text}</TextContent>
    </>
  );
};
