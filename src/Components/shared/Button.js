import styled from "styled-components";

export const buttonStyle = `
  display: flex;
    
  margin: 0;
  padding: 0.5rem 1rem;

  border: none;
  border-radius: 0.5rem;

  background: #ddd;

  cursor: pointer;

  &:hover{
    background: #eee;
  }

  &:active {
    background: #ccc;
  }

  &.inactive {
    pointer-events: none;
    background: #666;
  }
`;

const Button = styled.button`${buttonStyle}`;

export default Button;