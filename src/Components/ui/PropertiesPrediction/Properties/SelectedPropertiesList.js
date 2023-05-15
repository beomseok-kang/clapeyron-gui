import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../shared/Button';
import PropertiesListItem from '../Shared/ListItem';
import PropertiesOrderedList from '../Shared/OrderedList';
import { deleteProperty } from '../../../../Reducer/propertiesPrediction/properties';

function PropertiesItem({ property }) {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(deleteProperty(property));

  return (
    <PropertiesListItem>
      {property.name}
      <Button onClick={onClickDelete}>Delete</Button>
    </PropertiesListItem>
  );
}

function SelectedPropertiesList({ properties }) {
  return (
    <PropertiesOrderedList title="Selected Properties">
      {properties.map(property => <PropertiesItem property={property} key={property.id}/>)}
    </PropertiesOrderedList>
  );
}

export default SelectedPropertiesList;