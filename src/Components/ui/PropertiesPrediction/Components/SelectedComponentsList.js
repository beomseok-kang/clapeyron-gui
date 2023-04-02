import ComponentsOrderedList from '../Shared/OrderedList';
import ComponentsListItem from '../Shared/ListItem';
import { useDispatch } from 'react-redux';
import { deleteComponent } from '../../../../Reducer/propertiesPrediction/components';
import Button from '../../../shared/Button';

function ComponentsItem({ component }) {
  const dispatch = useDispatch();
  const onClick = () => dispatch(deleteComponent(component));

  return (
    <ComponentsListItem>
      {component.name}
      <Button onClick={onClick}>
        Delete
      </Button>
    </ComponentsListItem>
  );
}

function SelectedComponentsList({ components }) {
  return (
    <ComponentsOrderedList title={"Selected Components"}>
      {components.map(component => <ComponentsItem component={component} key={component.id}/>)}
    </ComponentsOrderedList>
  );
}

export default SelectedComponentsList;