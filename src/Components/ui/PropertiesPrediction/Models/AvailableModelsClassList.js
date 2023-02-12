import styled from 'styled-components';
import OrderedList from '../../../shared/OrderedList';
import modelsList from "../../../../Data/modelsList.json";
import Button from '../../../shared/Button';
import { useDispatch } from 'react-redux';
import { addModel } from '../../../../Reducer/propertiesPrediction';
import { useState } from 'react';
import ListItem from '../../../shared/ListItem';

const StyledOrderedList = styled(OrderedList)`
  display: block;
  height: 100%;
`;

const StyledListItem = styled(ListItem)`
  display: flex;
`;

const StyledList = styled.ul`

`;

const StyledLi = styled.li`

`;

function ModelsItem({ model }) {
  const dispatch = useDispatch();
  
  const onClick = () => {
    dispatch(addModel(model));
  };

  return (
    <StyledLi>
      {model}
      <Button onClick={onClick}>
        Add
      </Button>
    </StyledLi>
  );
}

function AvailableModelsClassListItem({ modelsClass }) {
  // Models List Item

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <StyledListItem>
      {modelsClass.name}
      <Button onClick={onClick}>{isOpen ? "Hide Models" : "Show Models"}</Button>
      {
        isOpen && <StyledList>
          {modelsClass.models.map(model => <ModelsItem model={model}/>)}
        </StyledList>
      }
    </StyledListItem>
  );
}


function AvailableModelsList() {
  // Available Models List
  return (
    <StyledOrderedList>
      {modelsList.map(mc => <AvailableModelsClassListItem modelsClass={mc}/>)}
    </StyledOrderedList>
  );
}

export default AvailableModelsList;