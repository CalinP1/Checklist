import { useState } from "react";
import Button from "./button";
export default function CreateList({ itemList, setItemList, onHandleReset }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description || !category) return;
    const key = crypto.randomUUID();
    const newItem = {
      description,
      quantity,
      category,
      key,
      checked: false,
    };
    setItemList([...itemList, newItem]);
    setDescription("");
    setQuantity("");
    setCategory("");
  }
  return (
    <form className="create-list" onSubmit={handleSubmit}>
      <label> Add an item</label>
      <input
        value={description}
        type="text"
        placeholder="ex: milk, eggs, socks.."
        onChange={(e) => setDescription(e.target.value)}
      />
      <label> How many?</label>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <label> Add a category</label>
      <input
        value={category}
        type="text"
        placeholder="ex: Groceries, holliday.."
        onChange={(e) => setCategory(e.target.value)}
      />

      <Button>✔ Add</Button>
      <Button onClick={onHandleReset}>RESET ♻</Button>
    </form>
  );
}
