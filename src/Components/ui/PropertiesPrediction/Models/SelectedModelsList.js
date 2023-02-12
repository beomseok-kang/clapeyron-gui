import { useDispatch, useSelector } from 'react-redux';
import { deleteModel } from '../../../../Reducer/propertiesPrediction';
import Button from '../../../shared/Button';
import ListItem from '../../../shared/ListItem';
import ModelsOrderedList from './ModelsOrderedList';

function ModelsListItem({ model }) {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(deleteModel(model));

  return (
    <ListItem key={model.id}>
      {model.name}
      <Button onClick={onClickDelete}>Delete</Button>
    </ListItem>
  );
}

function SelectedModelsList({ models }) {
  return (
    <ModelsOrderedList>
      {models.map(model => <ModelsListItem model={model}/>)}
    </ModelsOrderedList>
  );
}

export default SelectedModelsList;