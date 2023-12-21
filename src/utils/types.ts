export interface TaskItem {
  id: number;
  text: string;
}

export interface TaskProps {
  onDelete: () => void;
  text: string;
}