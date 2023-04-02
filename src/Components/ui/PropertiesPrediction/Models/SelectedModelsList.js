import { useDispatch, useSelector } from 'react-redux';
import { deleteModel } from '../../../../Reducer/propertiesPrediction/models';
import Button from '../../../shared/Button';
import ModelsListItem from '../Shared/ListItem';
import ModelsOrderedList from '../Shared/OrderedList';

function ModelsItem({ model }) {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(deleteModel(model));

  return (
    <ModelsListItem>
      {model.name}
      <Button onClick={onClickDelete}>Delete</Button>
    </ModelsListItem>
  );
}

function SelectedModelsList({ models }) {
  return (
    <ModelsOrderedList title="Selected EoS's">
      {models.map(model => <ModelsItem model={model} key={model.id}/>)}
    </ModelsOrderedList>
  );
}

export default SelectedModelsList;