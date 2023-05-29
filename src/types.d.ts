import { Task } from "./components/Task/types";

export interface TypeObjTask {
  tasks: Task[];
  onChangeTask: (task: Task[]) => void;
}
