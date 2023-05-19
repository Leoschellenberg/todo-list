import { PlusCircle } from "@phosphor-icons/react";
import * as S from "./styles";

export const TaskInput = () => {
  return (
    <S.Wrapper>
      <S.Form>
        <S.Input placeholder="Adicione uma nova tarefa" />
        <S.Button>
          Criar
          <PlusCircle size={16} weight="bold" />
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
};
