import { ThemeProvider } from "styled-components";

import { DefaultTheme, GlobalStyles } from "@/styles";
import { Header } from "./components/Header/index";
import { TaskInput } from "./components/TaskInput/index";
import { Task } from "./components/Task/index";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
      <TaskInput />
      <Task />
    </ThemeProvider>
  );
}

export default App;
