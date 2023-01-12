import { useDispatch } from "react-redux";
import { deleteModel } from "../../../../Reducer/propertiesPrediction";
import Button from "../../../shared/Button";
import ListItem from "../../../shared/ListItem";

function ModelsListItem({ model }) {
  const dispatch = useDispatch();
  const onClickDelete = () => dispatch(deleteModel(model));

  return (
    <ListItem>
      {model}
      <Button onClick={onClickDelete}>Delete</Button>
    </ListItem>
  );
}

export default ModelsListItem;