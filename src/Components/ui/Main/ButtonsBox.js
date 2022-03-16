import styled from 'styled-components';
import Button from '../../shared/Button';

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  margin-bottom: 1rem;

  button {
    margin: 0 auto;
  }
`;

function StartClapeyronButton() {
  return (
    <Button>Start Clapeyron</Button>
  );
}

function ParametersEstimationButton() {
  const onClick = () => {
    alert("Developing...")
  }

  return (
    <Button onClick={onClick}>Parameters Estimation</Button>
  );
}

function ButtonsBox() {

  return (
    <Ul>
      <Li><StartClapeyronButton/></Li>
      <Li><ParametersEstimationButton/></Li>
    </Ul>
  );
}

export default ButtonsBox;