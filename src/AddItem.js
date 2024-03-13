import { useState } from "react";

const AddItem = ({ onAddItem }) => {
  const [description, setDescription] = useState();

  const handleOnButtonClick = () => {
    onAddItem(description);
    setDescription("");
  };

  return (
    <div>
      <input
        placeholder="What do you need to do?"
        value={description}
        onInput={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={handleOnButtonClick}>ADD</button>
    </div>
  );
};

export default AddItem;
