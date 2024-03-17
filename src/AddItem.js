import { useState } from "react";

const AddItem = ({ onAddItem }) => {
  const [description, setDescription] = useState();

  const handleOnButtonClick = () => {
    if (description) {
      onAddItem(description);
      setDescription("");
    }
  };

  return (
    <form
      className="flex w-auto mt-8 p-2 border-2 border-[#262626] focus-within:border-[#919191] my-4 rounded-lg"
      onSubmit={(e) => e.preventDefault()}
    >
      <button
        className="bg-[#e68c3a] hover:bg-[#dc6900] text-white font-medium py-2 px-4 rounded-full text-base"
        onClick={handleOnButtonClick}
      >
        +
      </button>
      <input
        placeholder="What do you need to do?"
        value={description}
        onInput={(e) => {
          setDescription(e.target.value);
        }}
        className="border-none text-white focus:outline-none overflow-hidden bg-transparent px-4 "
      />
    </form>
  );
};

export default AddItem;
