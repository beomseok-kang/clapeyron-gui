import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import OrderedList from '../../../shared/OrderedList';
import ModelsListItem from './ModelsListItem';

const StyledOrderedList = styled(OrderedList)`
  height: 100%;
`;

function ModelsList() {
  const models = useSelector(state => state.propertiesPrediction).models;
  const dispatch = useDispatch();

  return (
    <StyledOrderedList>
      Hello Ordered List
      {models.map(model => <ModelsListItem model={model}/>)}
    </StyledOrderedList>
  );
}

export default ModelsList;