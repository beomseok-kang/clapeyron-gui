import Button from "../../../shared/Button";
import ListItem from "../../../shared/ListItem";
import styled from 'styled-components';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addModel, ADD_MODEL } from "../../../../Reducer/propertiesPrediction";

const StyledListItem = styled(ListItem)`
  display: flex;
  flex-direction: column;
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

export default AvailableModelsClassListItem;