import ComponentsOrderedList from '../Shared/OrderedList';
import ComponentsListItem from '../Shared/ListItem';

function ComponentsItem() {}

function SelectedComponentsListItem({}) {}

function SelectedComponentsList({ components }) {
  return (
    <ComponentsOrderedList title={"Selected Components"}>

    </ComponentsOrderedList>
  );
}

export default SelectedComponentsList;