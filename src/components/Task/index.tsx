import * as S from "./styles";

export const Task = () => {
  return (
    <S.Wrapper>
      <S.Header>
        <S.TotalTasks>
          Tarefas criadas <span>5</span>
        </S.TotalTasks>
        <S.FinishedTasks>
          Concluidas <span>2 de 5</span>
        </S.FinishedTasks>
      </S.Header>
    </S.Wrapper>
  );
};
