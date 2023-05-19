export interface TypeObjTask {
  tasks: {
    id: number;
    checked: boolean;
    title: string;
  };
  onChangeTask: (task: Task) => void;
}

export interface Tasks {
  id: number;
  checked: boolean;
  title: string;
}
[];
