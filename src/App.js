import { useState } from "react";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function handleReset() {
    const confirmed = window.confirm("Do you want to delete all items?");
    if (confirmed) {
      setItemList([]);
    }
  }

  function handelChecked(id) {
    setItemList((itemList) =>
      itemList.map((item) =>
        item.key === id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function handleDelete(id) {
    setItemList((itemList) => itemList.filter((item) => item.key !== id));
  }
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="display-container">
          <DisplayList
            itemList={itemList}
            onHandleDelete={handleDelete}
            onHandleChecked={handelChecked}
          />
        </div>
        <div className="create-container">
          <CreateList
            itemList={itemList}
            setItemList={setItemList}
            onHandleReset={handleReset}
          />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header-container">
      <header className="navbar">
        <span>✔ CHECKLIST</span>
      </header>
    </div>
  );
}
function DisplayList({ itemList, onHandleDelete, onHandleChecked }) {
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
function CardElement({ item, onHandleDelete, onHandleChecked }) {
  return (
    <li className="card-element">
      <h3>{item.category}</h3>
      <input
        checked={item.checked}
        type="checkbox"
        onChange={() => onHandleChecked(item.key)}
      ></input>
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button className="button" onClick={() => onHandleDelete(item.key)}>
        ✖
      </button>
    </li>
  );
}

function CreateList({ itemList, setItemList, onHandleReset }) {
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
        placeholder="ex: milk, eggs.."
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

      <label> Adauga o categorie</label>
      <input
        value={category}
        type="text"
        placeholder="Groceries, holliday.."
        onChange={(e) => setCategory(e.target.value)}
      />

      <Button>➕ Add</Button>
      <Button handleReset={onHandleReset}>RESET 🔁</Button>
    </form>
  );
}

function Button({ children, handleReset }) {
  return (
    <button onClick={handleReset} className="button">
      {children}
    </button>
  );
}
