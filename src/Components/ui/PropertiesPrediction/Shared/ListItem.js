import styled from 'styled-components';

const StyledList = styled.li`
  display: flex;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  background: cyan;
`;

function ListItem({ children }) {
  return (
    <StyledList>
      <StyledItemWrapper>
        {children}
      </StyledItemWrapper>
    </StyledList>
  );
}

export default ListItem;