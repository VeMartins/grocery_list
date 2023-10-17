import SingleItem from "./SingleItem";

const Items = ({ items, deleteItem, toggleCompletedItem }) => {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            toggleCompletedItem={toggleCompletedItem}
          />
        );
      })}
    </section>
  );
};
export default Items;
