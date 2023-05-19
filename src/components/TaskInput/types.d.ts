import { FormEvent } from "react";

export interface TypeObjInputTask {
  setInputTask: (value: string) => void;
  handleCreateNewComment: (event: FormEvent) => void;
  inputTask: string;
}
