import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Orderedlist from '../../../shared/OrderedList';
import ModelsListItem from './ModelsListItem';

const StyledOrderedList = styled(Orderedlist)`
  height: 100%;
`;

function SelectedModelsList() {
  const models = useSelector(state => state.propertiesPrediction).models;

  return (
    <StyledOrderedList>
      {models.map(model => <ModelsListItem model={model}/>)}
    </StyledOrderedList>
  );
}

export default SelectedModelsList;