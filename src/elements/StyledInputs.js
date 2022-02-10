import styled, { css } from 'styled-components';

export default styled.input`
    height: 56px;
    color: ${(props) => props.theme.colors.default};
    border: solid 1px ${(props) => props.theme.colors.default};
    border-radius: 8px;
    font-family: 'Noto Sans Display', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    width: 200px;

    ${(props) => props.default && css `
        &:hover {
            border: solid 1px ${props.theme.colors.defaultHover};
            color: ${props.theme.colors.defaultHover};
        }

        &:focus, :focus-visible {
            border: solid 1px ${props.theme.colors.defaultFocus};
        }

    `}
    
    ${(props) => props.error && css `
        border: solid 1px ${props.theme.colors.danger};


        &:hover {
            color: ${props.theme.colors.danger};
            border: solid 1px ${props.theme.colors.defaultHover};
        }

        &:focus, :focus-visible {
            border: solid 1px ${props.theme.colors.danger};
        }

    `}
  
`;