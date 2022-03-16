import styled from 'styled-components';
import logo from '../../../Assets/Image/logo.png';

const LogoWrapper = styled.h1``;
const LogoImg = styled.div`
  width: 30rem;
  height: 10rem;

  margin: 0 auto;

  text-indent: -9999px;

  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

function Logo () {
  return (
    <LogoWrapper>
      <LogoImg/>
    </LogoWrapper>
  );
}

export default Logo;