import styled from 'styled-components';

const StyledItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  background: cyan;
`;

function ModelsListItem({ children }) {
  return (
    <li>
      <StyledItemWrapper>
        {children}
      </StyledItemWrapper>
    </li>
  );
}

export default ModelsListItem;