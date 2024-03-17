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

    items.unshift(item);

    setItems([...items]);
  };

  const handleOnItemClicked = (item, isChecked) => {
    const selectedItem = items.find((itemToFind) => itemToFind.id === item.id);

    selectedItem.isDone = isChecked;

    setItems([...items]);
  };

  return (
    <div className="m-auto py-10 p-8 w-3/4">
      <h1 className="text-4xl text-center font-bold text-[#dbdbdb]">
        Hello todo list!
      </h1>
      <AddItem onAddItem={handleOnAddItem} />
      <TodoItems items={items} onItemClicked={handleOnItemClicked} />
    </div>
  );
};

export default TodoApp;
