import { useSelector } from 'react-redux';
import Wrapper from '../Shared/SectionWrapper';
import AvailablePropertiesList from './AvailablePropertiesList';
import SelectedPropertiesList from './SelectedPropertiesList';

function PropertiesSelectionWrapper() {
  const models = useSelector(state => state.models);

  return (
    <Wrapper>
      <AvailablePropertiesList models={models}/>
      <SelectedPropertiesList models={models}/>
    </Wrapper>
  );
}

export default PropertiesSelectionWrapper;
