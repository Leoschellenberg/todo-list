import styled, { css } from "styled-components";

export const Wrapper = styled.section`
  max-width: 46rem;
  margin: 0 auto;
  align-items: center;
  padding: 0 1rem;
`;

export const Form = styled.form`
  display: flex;
  margin-top: -1.6875rem;
  gap: 0.5rem;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    color: ${theme.colors.gray_100};
    width: 100%;
    background-color: ${theme.colors.gray_500};
    border: none;
    border-radius: 8px;
    height: 3.375rem;
    padding: 0 1rem;

    &::placeholder {
      color: ${theme.colors.gray_300};
    }

    &:focus {
      outline: none;
      border: 1px solid ${theme.colors.purple_dark} !important;
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    height: 3.375rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-radius: 8px;
    background-color: ${theme.colors.blue_dark};
    font-weight: bold;
    color: ${theme.colors.gray_100};
    border: none;

    &:hover {
      background-color: ${theme.colors.blue};
    }
  `}
`;
