import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { deleteModel } from '../../../../Reducer/propertiesPrediction';
import Button from '../../../shared/Button';
import ListItem from '../../../shared/ListItem';
import Orderedlist from '../../../shared/OrderedList';

const StyledOrderedList = styled(Orderedlist)`
  height: 100%;
`;

function ModelsListItem({ model }) {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(deleteModel(model));

  return (
    <ListItem>
      {model}
      <Button onClick={onClickDelete}>Delete</Button>
    </ListItem>
  );
}

function SelectedModelsList() {
  const models = useSelector(state => state.propertiesPrediction).models;

  return (
    <StyledOrderedList>
      {models.map(model => <ModelsListItem model={model}/>)}
    </StyledOrderedList>
  );
}

export default SelectedModelsList;