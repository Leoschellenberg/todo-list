import { ThemeProvider } from "styled-components";

import { Header } from "@components/Header";
import { TaskInput } from "@components/TaskInput";
import { Task } from "@components/Task";

import { FormProvider } from "./context/task";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <FormProvider>
        <GlobalStyles />
        <Header />
        <TaskInput />
        <Task />
      </FormProvider>
    </ThemeProvider>
  );
}

export default App;
