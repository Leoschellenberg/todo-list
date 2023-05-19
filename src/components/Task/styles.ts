import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  max-width: 46rem;
  margin: 0 auto;
  align-items: center;
  padding: 0 1rem;
`;

export const Header = styled.header`
  ${() => css`
    display: flex;
    justify-content: space-between;
    margin: 4rem 0 1.5rem 0;
  `}
`;
export const TotalTasks = styled.h2`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: ${theme.colors.blue};

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Inter", sans-serif;
      font-size: 0.75rem;
      background-color: ${theme.colors.gray_400};
      color: ${theme.colors.gray_200};
      height: 1.1875rem;
      width: 1.5rem;
      border-radius: 1rem;
    }
  `}
`;
export const FinishedTasks = styled.h2`
  ${({ theme }) => css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    font-family: "Inter", sans-serif;
    font-size: 0.875rem;
    color: ${theme.colors.purple};

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Inter", sans-serif;
      font-size: 0.75rem;
      background-color: ${theme.colors.gray_400};
      color: ${theme.colors.gray_200};
      height: 1.1875rem;
      padding: 0 0.5rem;
      border-radius: 1rem;
    }
  `}
`;

export const ContainerTask = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 1rem;
    gap: 0.75rem;
    justify-content: space-between;
    background-color: ${theme.colors.gray_500};
    border-radius: 8px;

    .CheckCircle {
      color: ${theme.colors.purple_dark};
      cursor: pointer;
    }
    .Circle {
      color: ${theme.colors.blue};
      cursor: pointer;
    }

    .Trash {
      color: ${theme.colors.gray_300};
      border-radius: 4px;
      padding-block: 5px;
      cursor: pointer;

      &:hover {
        color: ${theme.colors.danger};
        background-color: ${theme.colors.gray_400};
      }
    }

    & + div {
      margin-top: 0.75rem;
    }
  `};
`;

export const TitleTask = styled.h2`
  ${({ theme }) => css`
    font-size: 0.875rem;
    color: ${theme.colors.gray_100};
    width: 100%;
    font-weight: ${theme.font.weight.regular};

    &.checked {
      text-decoration-line: line-through;
      color: ${theme.colors.gray_300};
    }
  `}
`;
