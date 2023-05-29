import { createContext, useState } from "react";
import { TypeObjTask, Task, TaskProviderProps } from "./types";

const defaultState = {} as TypeObjTask;
const FormContext = createContext<TypeObjTask>(defaultState);

function FormProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleDeleteComment(taskToDelete: Task) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete.id;
    });
    setTasks(tasksWithoutDeletedOne);
  }

  const handleCreateNewComment = (title: string) => {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      checked: false,
      title: title
    };
    setTasks([...tasks, newTask]);
  };

  function handleSetTaskFinished(taskFinished: Task) {
    const tasksMarkFinished = tasks.map((task) => {
      if (task.id === taskFinished.id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTasks(tasksMarkFinished);
  }

  return (
    <FormContext.Provider
      value={{
        handleDeleteComment,
        handleSetTaskFinished,
        handleCreateNewComment,
        tasks
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export { FormContext, FormProvider };
