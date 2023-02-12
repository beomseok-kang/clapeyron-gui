import { useSelector } from 'react-redux';
import Wrapper from '../Shared/SectionWrapper';
import AvailableModelsClassList from './AvailableModelsClassList';
import SelectedModelsList from './SelectedModelsList';

function ModelsSectionWrapper() {
  const models = useSelector(state => state.models);

  return (
    <Wrapper>
      <AvailableModelsClassList models={models}/>
      <SelectedModelsList models={models}/>
    </Wrapper>
  );
}

export default ModelsSectionWrapper;
