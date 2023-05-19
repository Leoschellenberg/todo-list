import * as S from "./styles";

import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <S.Wrapper>
      <img src={Logo} alt="Logo Todo" />
    </S.Wrapper>
  );
};
