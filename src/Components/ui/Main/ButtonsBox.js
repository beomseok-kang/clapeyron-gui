import styled from 'styled-components';
import LinkButton from '../../shared/LinkButton';

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 1rem;

  a {
    display: inline-block;
  }
`;

function PropertiesPredictionButton() {
  return (
    <LinkButton to={"/pp/models"}>Properties Prediction</LinkButton>
  );
}

function ParametersEstimationButton() {
  const onClick = () => {
    alert("Developing...")
  }

  return (
    <LinkButton onClick={onClick}>Parameters Estimation</LinkButton>
  );
}

function ButtonsBox() {

  return (
    <Ul>
      <Li><PropertiesPredictionButton/></Li>
      <Li><ParametersEstimationButton/></Li>
    </Ul>
  );
}

export default ButtonsBox;