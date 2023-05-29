import { PlusCircle } from "@phosphor-icons/react";
import * as S from "./styles";

import { FormContext } from "@/context/task";
import { useContext, useState } from "react";

import { TypeObjInputTask } from "./types";

export const TaskInput = () => {
  const [inputTask, setInputTask] = useState("");
  const { handleCreateNewComment }: TypeObjInputTask = useContext(FormContext);

  function handleCreate() {
    event?.preventDefault();
    handleCreateNewComment(inputTask);
    setInputTask("");
  }

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleCreate}>
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
