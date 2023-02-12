import styled from "styled-components";
import OrderedList from '../../../shared/OrderedList';

const StyledOrderedList = styled(OrderedList)`
  width: 500px;
  height: 50%;

  overflow-y: scroll;
`;

function ModelsOrderedList({ children }) {
  return (
    <StyledOrderedList>
      {children}
    </StyledOrderedList>
  );
}

export default ModelsOrderedList;