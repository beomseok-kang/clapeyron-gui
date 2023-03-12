import OrderedList from '../Shared/OrderedList';
import ListItem from '../Shared/ListItem';

function ComponentsItem() {}

function AvailableComponentsListItem({  }) {
  return (null);
}

function AvailableComponentsList({components, availableComponents}) {
  return (
    <OrderedList title={"Available Components"}>
      {availableComponents.map(ac => {
        return ac;
      })}
    </OrderedList>
  );
}

export default AvailableComponentsList;