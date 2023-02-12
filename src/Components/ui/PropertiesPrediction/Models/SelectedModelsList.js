import { useDispatch, useSelector } from 'react-redux';
import { deleteModel } from '../../../../Reducer/propertiesPrediction/models';
import Button from '../../../shared/Button';
import ModelsListItem from '../Shared/ModelsListItem';
import ModelsOrderedList from '../Shared/ModelsOrderedList';

function ModelsItem({ model }) {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(deleteModel(model));

  return (
    <ModelsListItem key={model.id}>
      {model.name}
      <Button onClick={onClickDelete}>Delete</Button>
    </ModelsListItem>
  );
}

function SelectedModelsList({ models }) {
  return (
    <ModelsOrderedList title="Selected EoS's">
      {models.map(model => <ModelsItem model={model}/>)}
    </ModelsOrderedList>
  );
}

export default SelectedModelsList;