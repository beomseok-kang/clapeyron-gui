import { useSelector } from 'react-redux';
import Wrapper from '../Shared/SectionWrapper';
import AvailableComponentsList from './AvailableComponentsList';
import SelectedComponentsList from './SelectedComponentsList';

function ComponentsSelectionWrapper() {
  const components = useSelector(state => state.components);
  const availableComponents = useSelector(state => state.availableComponents);
  
  return (
    <Wrapper>
      <AvailableComponentsList components={components} availableComponentsIds={availableComponents}/>
      <SelectedComponentsList components={components} availableComponents={availableComponents}/>
    </Wrapper>
  );
}

export default ComponentsSelectionWrapper;