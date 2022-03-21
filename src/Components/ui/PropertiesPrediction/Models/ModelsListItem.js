import Button from "../../../shared/Button";
import ListItem from "../../../shared/ListItem";

function ModelsListItem({ model }) {
  return (
    <ListItem>
      {model.name}
      <Button>Edit</Button>
      <Button>Delete</Button>
    </ListItem>
  );
}

export default ModelsListItem;