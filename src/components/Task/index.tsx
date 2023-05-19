import { CheckCircle, Circle, Trash } from "@phosphor-icons/react";
import * as S from "./styles";

import { TypeObjTask } from "./types";

export const Task = ({
  tasks,
  handleDeleteComment,
  handleSetTaskFinished
}: TypeObjTask) => {
  const countFinishedTask = tasks.reduce((total, task) => {
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
            {countFinishedTask} de {tasks.length}
          </span>
        </S.FinishedTasks>
      </S.Header>

      {tasks.map((task) => {
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
