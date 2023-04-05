import styled from 'styled-components';
import { headerHeight } from '../../constants';
import ComponentsSelectionWrapper from './Components/ComponentsSelectionWrapper';
import ModelsSectionWrapper from './Models/ModelsSectionWrapper';
import PropertiesSelectionWrapper from './Properties/PropertiesSelectionWrapper';

const Wrapper = styled.div`
  height: calc(100% - ${headerHeight});
  width: 100vw;

  overflow-x: scroll;

  display: flex;
  flex-direction: row;
`;

function PropertiesPredictionWrapper() {
  return (
    <Wrapper>
      <ModelsSectionWrapper/>
      <ComponentsSelectionWrapper/>
      <PropertiesSelectionWrapper/>
    </Wrapper>
  );
}

export default PropertiesPredictionWrapper;
