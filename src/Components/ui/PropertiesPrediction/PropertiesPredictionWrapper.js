import styled from 'styled-components';
import { headerHeight } from '../../constants';
import ComponentsSelectionWrapper from './Components/ComponentsSelectionWrapper';
import ModelsSectionWrapper from './Models/ModelsSectionWrapper';

const Wrapper = styled.div`
  height: calc(100% - ${headerHeight});

  display: flex;
  flex-direction: row;
`;

function PropertiesPredictionWrapper() {
  return (
    <Wrapper>
      <ModelsSectionWrapper/>
      <ComponentsSelectionWrapper/>
    </Wrapper>
  );
}

export default PropertiesPredictionWrapper;
