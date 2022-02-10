import styled, { css } from 'styled-components';

export default styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;
    color: ${(props) => props.theme.colors.default};
    margin-top: 4px;
    
    ${(props) => props.error && css `
        color: ${props.theme.colors.danger};

    `}
`