import OrderedList from '../Shared/OrderedList';
import ListItem from '../Shared/ListItem';
import { useDispatch } from 'react-redux';
import Button from '../../../shared/Button';
import propertiesList from '../../../../Data/propertiesList.json';
import { getElementsByIds } from '../../../../Util/func';
import { addProperty } from '../../../../Reducer/propertiesPrediction/properties';

function PropertiesItem({ property }) {
  const dispatch = useDispatch();

  const onClick = () => dispatch(addProperty(property));
  
  return (
    <ListItem>
      {property.name}
      <Button onClick={onClick}>
        Add
      </Button>
    </ListItem>
  );
}

function AvailablePropertiesList({properties, availablePropertiesIds}) {
  const availableProperties = getElementsByIds(availablePropertiesIds, propertiesList);

  return (
    <OrderedList title={"Available Properties"}>
      {availableProperties.map(ap => <PropertiesItem property={ap} key={ap.id}/>)}
    </OrderedList>
  );
}

export default AvailablePropertiesList;