import styled, { css } from 'styled-components';

export default styled.input`
    height: 56px;
    color: #828282;
    border: solid 1px #828282;
    border-radius: 8px;
    font-family: 'Noto Sans Display', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    width: 200px;

    ${(props) => props.default && css `
        
    `}
  
`;