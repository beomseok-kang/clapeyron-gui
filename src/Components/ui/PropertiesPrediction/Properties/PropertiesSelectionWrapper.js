import { useSelector } from 'react-redux';
import Wrapper from '../Shared/SectionWrapper';
import AvailablePropertiesList from './AvailablePropertiesList';
import SelectedPropertiesList from './SelectedPropertiesList';

function PropertiesSelectionWrapper() {
  const properties = useSelector(state => state.properties);
  const availableProperties = useSelector(state => state.availableProperties);

  return (
    <Wrapper>
      <AvailablePropertiesList properties={properties} availablePropertiesIds={availableProperties}/>
      <SelectedPropertiesList properties={properties}  availableProperties={availableProperties}/>
    </Wrapper>
  );
}

export default PropertiesSelectionWrapper;
