import styled from 'styled-components';
import modelsList from "../../../../Data/modelsList.json";
import Button from '../../../shared/Button';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ListItem from '../../../shared/ListItem';
import ModelsOrderedList from '../Shared/ModelsOrderedList';
import ModelsListItem from '../Shared/ModelsListItem';
import { addModel } from '../../../../Reducer/propertiesPrediction/models';

const StyledListItem = styled(ListItem)`
  display: flex;
`;

const StyledList = styled.ul`
  background: lightblue;

`;

const StyledItemWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

function ModelsItem({ model }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(addModel(model));
  };

  return (
    <ModelsListItem>
      {model.name}
        <Button onClick={onClick}>
          Add
        </Button>
    </ModelsListItem>
  );
}

function AvailableModelsClassListItem({ modelsClass }) {
  // Models List Item

  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(!isOpen);

  return (
    <StyledListItem key={modelsClass.id}>
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
    </StyledListItem>
  );
}


function AvailableModelsList({ models }) {
  // Available Models List
  return (
    <ModelsOrderedList title="Available EoS's">
      {modelsList.map(mc => <AvailableModelsClassListItem models={models} modelsClass={mc}/>)}
    </ModelsOrderedList>
  );
}

export default AvailableModelsList;