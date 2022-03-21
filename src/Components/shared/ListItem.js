import styled from 'styled-components';

const Li = styled.li`
  padding: 0.5rem;

  background-color: #ccc;

  border-radius: 0.5rem;
`;

function ListItem ({ children }) {
  return (
    <Li>
      {children}
    </Li>
  );
}

export default ListItem;