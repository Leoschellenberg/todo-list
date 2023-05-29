import { CheckCircle, Circle } from "@phosphor-icons/react";
import * as S from "./styles";
import { CheckboxProps } from "./types";

export default function Checkbox({ isChecked, handleChecked }: CheckboxProps) {
  return (
    <S.Wrapper>
      {isChecked ? (
        <CheckCircle
          size={20}
          weight="fill"
          className="checked"
          onClick={handleChecked}
        />
      ) : (
        <Circle
          size={20}
          color="#4EA8DE"
          className="unchecked"
          onClick={handleChecked}
        />
      )}
    </S.Wrapper>
  );
}
