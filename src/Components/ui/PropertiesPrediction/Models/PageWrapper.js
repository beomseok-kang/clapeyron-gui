import styled from 'styled-components';
import { headerHeight } from '../../../constants';
import AvailableModelsClassList from './AvailableModelsClassList';
import SelectedModelsList from './SelectedModelsList';

const Wrapper = styled.div`
  height: calc(100% - ${headerHeight});

  display: flex;
  align-items: center;

  background: salmon;
`;

function PageWrapper() {
  return (
    <Wrapper>
      <AvailableModelsClassList/>
      <SelectedModelsList/>
    </Wrapper>
  );
}

export default PageWrapper;
