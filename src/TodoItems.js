const TodoItems = ({ items, onItemClicked }) => {
  const handleOnItemClicked = (item, isChecked) => {
    console.log(">>>>> handleOnItemClicked >>", { item, isChecked });
    onItemClicked(item, isChecked);
  };

  return (
    <>
      {items.map((item) => {
        return (
          <div className="my-2 py-4 flex gap-2 px-2 bg-[#262626] hover:bg-[#292525] rounded-lg">
            <input
              type="checkbox"
              onClick={(e) => {
                handleOnItemClicked(item, e.target.checked);
              }}
              className="w-5 h-5 border-2 border-[#919191] rounded-sm bg-white accent-[#e68c3a]"
            />
            <label className="text-base font-normal text-[#dbdbdb]">
              {item.isDone ? (
                <s className="decoration-2">{item.description}</s>
              ) : (
                item.description
              )}
            </label>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default TodoItems;
