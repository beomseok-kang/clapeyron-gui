import styled from 'styled-components';

import Logo from '../Components/ui/Main/Logo';
import ButtonsBox from '../Components/ui/Main/ButtonsBox';
import Page from '../Components/shared/Page';

function Main () {
  return (
    <Page centered>
      <Logo/>
      <ButtonsBox/>
    </Page>
  );
}

export default Main; 