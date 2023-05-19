import styled, { css } from "styled-components";

export const Wrapper = styled.section`
    ${({ theme })=> css`
        display: flex;
        height: 12.5rem;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.gray_700};
        
        img{
            width: 7.875rem;
            height: 100%;
        }
    `}
`;