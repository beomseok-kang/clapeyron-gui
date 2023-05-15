import OrderedList from '../Shared/OrderedList';
import ListItem from '../Shared/ListItem';
import { useDispatch } from 'react-redux';
import Button from '../../../shared/Button';
import { addComponent } from '../../../../Reducer/propertiesPrediction/components';
import componentsList from '../../../../Data/componentsList.json';
import { getElementsByIds } from '../../../../Util/func';

function ComponentsItem({ component }) {
  const dispatch = useDispatch();

  const onClick = () => dispatch(addComponent(component));
  
  return (
    <ListItem>
      {component.name}
      <Button onClick={onClick}>
        Add
      </Button>
    </ListItem>
  );
}

function AvailableComponentsList({components, availableComponentsIds}) {
  const availableComponents = getElementsByIds(availableComponentsIds, componentsList);

  return (
    <OrderedList title={"Available Components"}>
      {availableComponents.map(ac => <ComponentsItem component={ac} key={ac.id}/>)}
    </OrderedList>
  );
}

export default AvailableComponentsList;