export interface TypeObjTask {
  tasks: {
    id: number;
    checked: boolean;
    title: string;
  };
  handleDeleteComment: (task: Task) => void;
  handleSetTaskFinished: (task: Task) => void;
}

export interface Task {
  id: number;
  checked: boolean;
  title: string;
}
