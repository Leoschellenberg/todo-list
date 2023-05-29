export interface TypeObjTask {
  tasks: Task[];
  handleDeleteComment: (task: Task) => void;
  handleSetTaskFinished: (task: Task) => void;
}

export interface Task {
  id: number;
  checked: boolean;
  title: string;
}
