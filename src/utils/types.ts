export interface TaskItem {
  id: number;
  order: number;
  text: string;
}

export interface TaskProps {
  onDelete: () => void;
  text: string;
}

export interface ChildProps {
  tasks: TaskItem[];
  setTasks: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}
