import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { headerHeight } from '../../../constants';
import AvailableModelsClassList from './AvailableModelsClassList';
import SelectedModelsList from './SelectedModelsList';

const Wrapper = styled.div`
  height: calc(100% - ${headerHeight});

  align-items: center;

  background: salmon;
`;

function PageWrapper() {
  const models = useSelector(state => state.propertiesPrediction).models;

  return (
    <Wrapper>
      <AvailableModelsClassList models={models}/>
      <SelectedModelsList models={models}/>
    </Wrapper>
  );
}

export default PageWrapper;
