import styled from 'styled-components';
import modelsList from "../../../../Data/modelsList.json";
import Button from '../../../shared/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import OrderedList from '../Shared/OrderedList';
import ListItem from '../Shared/ListItem';
import { addModel } from '../../../../Reducer/propertiesPrediction/models';

const StyledModelsClassListItem = styled.li`
  background-color: yellow;
`;

function ModelsItem({ model }) {
  const dispatch = useDispatch();

  const onClick = () => dispatch(addModel(model));

  return (
    <ListItem>
      {model.name}
      <Button onClick={onClick}>
        Add
      </Button>
    </ListItem>
  );
}

const StyledList = styled.ul`
  background: lightblue;
`;

const StyledItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function ModelsClassListItem({ modelsClass }) {
  // Models List Item

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <StyledModelsClassListItem key={modelsClass.id}>
      <StyledItemWrapper>
        {modelsClass.name}
        <Button onClick={onClick}>{isOpen ? "Hide Models" : "Show Models"}</Button>
      </StyledItemWrapper>
      {
        isOpen && <StyledList>
          {modelsClass.models.map(model => <ModelsItem
            key={model.id}
            model={model}
          />)}
        </StyledList>
      }
    </StyledModelsClassListItem>
  );
}


function AvailablePropertiesList({ models }) {
  // Available Models List
  return (
    <OrderedList title="Available Properties">
      {modelsList.map(mc => <ModelsClassListItem modelsClass={mc} key={mc.id}/>)}
    </OrderedList>
  );
}

export default AvailablePropertiesList;