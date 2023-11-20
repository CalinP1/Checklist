import CardElement from "./cardElement";
import { useState } from "react";
export default function DisplayList({
  itemList,
  onHandleDelete,
  onHandleChecked,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortItems;

  if (sortBy === "input") sortItems = itemList;
  if (sortBy === "quantity") {
    sortItems = itemList.slice().sort((a, b) => a.quantity - b.quantity);
  }
  if (sortBy === "category") {
    sortItems = itemList
      .slice()
      .sort((a, b) => a.category.localeCompare(b.category));
  }
  return (
    <>
      <div className="sort-tems">
        <label>How to sort the list?</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="quantity">Sort by quantity</option>
          <option value="category">Sort by category</option>
        </select>
      </div>
      <ul>
        {sortItems.map((item) => (
          <CardElement
            item={item}
            key={item.key}
            onHandleDelete={onHandleDelete}
            onHandleChecked={onHandleChecked}
          />
        ))}
      </ul>
    </>
  );
}
