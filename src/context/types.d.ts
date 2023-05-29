import { ReactNode } from "react";

export interface ArrayTask {
  tasks: Task;
}
[];

export interface Task {
  id: number;
  checked: boolean;
  title: string;
}

export interface TaskProviderProps {
  children: ReactNode;
}

export interface TypeObjTask {
  tasks: Task[];
  handleCreateNewComment: (text: string) => void;
  handleDeleteComment: (task: Task) => void;
  handleSetTaskFinished: (task: Task) => void;
}
