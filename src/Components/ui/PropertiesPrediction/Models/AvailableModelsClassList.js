import styled from 'styled-components';
import modelsList from "../../../../Data/modelsList.json";
import Button from '../../../shared/Button';
import { useDispatch } from 'react-redux';
import { addModel } from '../../../../Reducer/propertiesPrediction';
import { useState } from 'react';
import ListItem from '../../../shared/ListItem';
import ModelsOrderedList from './ModelsOrderedList';

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

function ModelsItem({ model, inactive }) {
  const dispatch = useDispatch();
  const [isInactive, setIsInactive] = useState(inactive);

  const onClick = () => {
    dispatch(addModel(model));
  };

  return (
    <li>
      <StyledItemWrapper>
        {model.name}
        <Button onClick={onClick} className={isInactive && "inactive"}>
          Add
        </Button>
      </StyledItemWrapper>
    </li>
  );
}

function AvailableModelsClassListItem({ models, modelsClass }) {
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
            inactive={!!models.find(m => m.id === model.id)}
          />)}
        </StyledList>
      }
    </StyledListItem>
  );
}


function AvailableModelsList({ models }) {
  // Available Models List
  return (
    <ModelsOrderedList>
      {modelsList.map(mc => <AvailableModelsClassListItem models={models} modelsClass={mc}/>)}
    </ModelsOrderedList>
  );
}

export default AvailableModelsList;