import { ThemeProvider } from "styled-components";

import { FormEvent, useState } from "react";

import { DefaultTheme, GlobalStyles } from "@/styles";
import { Header } from "./components/Header/index";
import { TaskInput } from "./components/TaskInput/index";
import { Task } from "./components/Task/index";

import { Tasks } from "./types";

function App() {
  const [inputTask, setInputTask] = useState("");
  const [tasks, setTasks] = useState<Tasks[]>([]);

  function handleDeleteComment(taskToDelete: Tasks) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskToDelete.id;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  const handleCreateNewComment = (event: FormEvent) => {
    if (inputTask) event.preventDefault();
    const newTask = {
      id: Math.floor(Math.random() * 100),
      checked: false,
      title: inputTask
    };
    setTasks([...tasks, newTask]);
    setInputTask("");
  };

  function handleSetTaskFinished(taskFinished: Tasks) {
    const tasksMarkFinished = tasks.map((task) => {
      if (task.id === taskFinished.id) {
        return { ...task, checked: !task.checked };
      }
      return task;
    });

    setTasks(tasksMarkFinished);
  }

  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
      <TaskInput
        setInputTask={setInputTask}
        inputTask={inputTask}
        handleCreateNewComment={handleCreateNewComment}
      />
      <Task
        tasks={tasks}
        handleDeleteComment={handleDeleteComment}
        handleSetTaskFinished={handleSetTaskFinished}
      />
    </ThemeProvider>
  );
}

export default App;
