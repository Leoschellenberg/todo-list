import {
  CheckCircle,
  Circle,
  ClipboardText,
  Trash
} from "@phosphor-icons/react";
import * as S from "./styles";

import { Task as TaskType } from "@/context/types";

import { TypeObjTask } from "./types";

import { FormContext } from "@/context/task";
import { useContext } from "react";

export const Task = () => {
  const { tasks, handleDeleteComment, handleSetTaskFinished }: TypeObjTask =
    useContext(FormContext);

  const countFinishedTask = tasks.reduce((total: number, task: TaskType) => {
    return task.checked ? (total += 1) : total;
  }, 0);

  return (
    <S.Wrapper>
      <S.Header>
        <S.TotalTasks>
          Tarefas criadas <span>{tasks.length}</span>
        </S.TotalTasks>
        <S.FinishedTasks>
          Concluidas{" "}
          <span>
            {tasks.length === 0 ? 0 : `${countFinishedTask} de ${tasks.length}`}
          </span>
        </S.FinishedTasks>
      </S.Header>

      {tasks.length == 0 && (
        <S.NoTasks>
          <ClipboardText size={52} className="ClipboardText" />
          <S.TextInfoNoTask>
            Você ainda não tem tarefas cadastradas
            <span>Crie tarefas e organize seus itens a fazer</span>
          </S.TextInfoNoTask>
        </S.NoTasks>
      )}

      {tasks &&
        tasks.map((task) => {
          return (
            <S.ContainerTask key={task.id}>
              {task.checked ? (
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="CheckCircle"
                  onClick={() => {
                    handleSetTaskFinished(task);
                  }}
                />
              ) : (
                <Circle
                  size={20}
                  color="#4EA8DE"
                  className="Circle"
                  onClick={() => {
                    handleSetTaskFinished(task);
                  }}
                />
              )}

              <S.TitleTask className={task.checked ? "checked" : ""}>
                {task.title}
              </S.TitleTask>
              <Trash
                size={24}
                className="Trash"
                onClick={() => {
                  handleDeleteComment(task);
                }}
              />
            </S.ContainerTask>
          );
        })}
    </S.Wrapper>
  );
};
