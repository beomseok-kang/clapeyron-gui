import styled from 'styled-components';
import { headerHeight } from '../../../constants';
import AddModelButton from './AddModelButton';
import ModelForm from './ModelForm';
import ModelsList from './ModelsList';

const Wrapper = styled.div`
  height: calc(100% - ${headerHeight});

  display: flex;
  align-items: center;

  background: salmon;
`;

function PageWrapper() {
  return (
    <Wrapper>
      <ModelsList/>
      <AddModelButton/>
      <ModelForm/>
    </Wrapper>
  );
}

export default PageWrapper;
