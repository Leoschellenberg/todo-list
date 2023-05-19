import { PlusCircle } from "@phosphor-icons/react";
import * as S from "./styles";

import { TypeObjInputTask } from "./types";

export const TaskInput = ({
  setInputTask,
  handleCreateNewComment,
  inputTask
}: TypeObjInputTask) => {
  return (
    <S.Wrapper>
      <S.Form onSubmit={handleCreateNewComment}>
        <S.Input
          placeholder="Adicione uma nova tarefa"
          value={inputTask}
          required
          onChange={(e) => {
            setInputTask(e.target.value);
          }}
        />
        <S.Button type="submit">
          Criar
          <PlusCircle size={16} weight="bold" />
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};
