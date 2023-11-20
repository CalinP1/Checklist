import { useState } from "react";
import Header from "./header";
import CreateList from "./createList";
import DisplayList from "./displayList";

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
