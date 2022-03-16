import styled from "styled-components";

const Button = styled.button`
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
`;

export default Button;