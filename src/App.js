export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <div className="display-container">
          <DisplayList />
        </div>
        <div className="create-container">
          <CreateList />
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
function DisplayList() {
  return (
    <ul>
      <CardElement />
    </ul>
  );
}
function CardElement() {
  return (
    <li className="card-element">
      <h3>Categoria</h3>
      <p>Ai adaugat acest numar de elemente</p>
      <span>Ai adaugat aceste elemente sfsafsafsafsafsafaf</span>
      <Button>✖</Button>
    </li>
  );
}
function CreateList() {
  return (
    <form className="create-list">
      <label> Adauga un obiect</label>
      <input />

      <label> Adauga o categorie</label>
      <input />

      <label>Sort the list..</label>
      <select>
        <option>Alphabeticali</option>
        <option>A</option>
        <option>A</option>
      </select>
      <Button>➕ Add</Button>
    </form>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}
