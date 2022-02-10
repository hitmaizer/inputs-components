import styled, { css } from 'styled-components';

export default styled.label`
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    color: ${(props) => props.theme.colors.default};
    margin-bottom: 4px;

    ${(props) => props.error && css `
        color: ${props.theme.colors.danger};
    `}
`