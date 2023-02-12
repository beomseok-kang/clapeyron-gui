import styled from "styled-components";
import OrderedList from '../../../shared/OrderedList';

const ModelsOrderedListWrapper = styled.div`
  width: 500px;
  height: 50%;
`;

const h3Height = "25px";
const StyledH3 = styled.h3`
  height: ${h3Height};

  font-size: 20px;
  font-weight: 700;
  color: azure;
`;

const StyledOrderedList = styled(OrderedList)`
  height: calc(100% - ${h3Height});
  overflow-y: scroll;
`;

function ModelsOrderedList({ title, children }) {
  return (
    <ModelsOrderedListWrapper>
      <StyledH3>
        {title}
      </StyledH3>
      <StyledOrderedList>
        {children}
      </StyledOrderedList>
    </ModelsOrderedListWrapper>
  );
}

export default ModelsOrderedList;