import styled from 'styled-components';
import OrderedList from '../../../shared/OrderedList';
import AvailableModelsClassListItem from './AvailableModelsClassListItem';
import modelsList from "../../../../Data/modelsList.json";

const StyledOrderedList = styled(OrderedList)`
  height: 100%;
`;

function AvailableModelsList() {
  console.log(modelsList);
  return (
    <StyledOrderedList>
      {modelsList.map(mc => <AvailableModelsClassListItem modelsClass={mc}/>)}
    </StyledOrderedList>
  );
}

export default AvailableModelsList;