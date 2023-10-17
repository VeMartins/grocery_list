import { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Items from "./components/Items";

// const getLocalStorage = () => {
//   let list = localStorage.getItem("list");
//   if (list) {
//     list = JSON.parse(localStorage.getItem("list"));
//   } else {
//     list = [];
//   }
//   return list;
// };  SAME AS defaultList
const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};
const defaultList = JSON.parse(localStorage.getItem("list") || "[]");

const App = () => {
  const [items, setItems] = useState(defaultList);
  const [item, setItem] = useState("");

  const addItem = (item) => {
    if (!item) {
      console.log("Nothing to add");
      return;
    }
    const newItem = { name: item, id: nanoid(4), completed: false };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const deleteItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setLocalStorage(newItems);
    return setItems(newItems);
  };

  const toggleCompletedItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(item);
    setItem("");
  };

  return (
    <main className="section-center">
      <Form
        addItem={addItem}
        handleSubmit={handleSubmit}
        item={item}
        setItem={setItem}
      />
      <Items
        items={items}
        deleteItem={deleteItem}
        toggleCompletedItem={toggleCompletedItem}
      />
    </main>
  );
};

export default App;
