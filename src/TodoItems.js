const TodoItems = ({ items, onItemClicked }) => {
  const handleOnItemClicked = (item, isChecked) => {
    console.log(">>>>> handleOnItemClicked >>", { item, isChecked });
    onItemClicked(item, isChecked);
  };

  return (
    <>
      {items.map((item) => {
        return (
          <>
            <input
              type="checkbox"
              onClick={(e) => {
                handleOnItemClicked(item, e.target.checked);
              }}
            />
            <label>
              {item.isDone ? <s>{item.description}</s> : item.description}
            </label>
            <br />
          </>
        );
      })}
    </>
  );
};

export default TodoItems;
