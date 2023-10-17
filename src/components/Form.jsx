import { useState } from "react";

const Form = ({ setItem, item, handleSubmit }) => {
  //   const [item, setItem] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     addItem(item);
  //     setItem("");
  //   };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery List</h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          name="item"
          value={item}
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Add Item
        </button>
      </div>
    </form>
  );
};
export default Form;
