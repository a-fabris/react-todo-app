import { useState } from "react";
import AddItem from "./AddItem";
import TodoItems from "./TodoItems";
import { getItems } from "./data/items";

const TodoApp = () => {
  const [items, setItems] = useState(getItems());

  const handleOnAddItem = (description) => {
    const itemsLength = items.length;

    const item = {
      id: itemsLength + 1,
      description: description,
      isDone: false,
    };

    setItems([...items, item]);
  };

  const handleOnItemClicked = (item, isChecked) => {
    const selectedItem = items.find((itemToFind) => itemToFind.id === item.id);

    selectedItem.isDone = isChecked;

    setItems([...items]);
  };

  return (
    <>
      <AddItem onAddItem={handleOnAddItem} />
      <TodoItems items={items} onItemClicked={handleOnItemClicked} />
    </>
  );
};

export default TodoApp;
