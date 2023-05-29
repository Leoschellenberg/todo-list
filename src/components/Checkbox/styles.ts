import styled, { css } from "styled-components";

export const Wrapper = styled.span`
  ${({ theme }) => css`
    .checked {
      color: ${theme.colors.purple_dark};
      cursor: pointer;
    }
    .unchecked {
      color: ${theme.colors.blue};
      cursor: pointer;
    }
  `}
`;
