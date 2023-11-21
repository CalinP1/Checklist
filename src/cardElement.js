export default function CardElement({ item, onHandleDelete, onHandleChecked }) {
  return (
    <li className="card-element">
      <h3 className="category-card">{item.category}</h3>
      <div className="container-main-element">
        <input
          checked={item.checked}
          type="checkbox"
          onChange={() => onHandleChecked(item.key)}
          className="checkbox-element"
        />
        <span style={item.checked ? { textDecoration: "line-through" } : {}}>
          {item.quantity}
        </span>
        <p
          className="text-quantity-element"
          style={item.checked ? { textDecoration: "line-through" } : {}}
        >
          {item.description}
        </p>
      </div>

      <div className="container-button-element">
        <button
          className="button-element"
          onClick={() => onHandleDelete(item.key)}
        >
          ✖
        </button>
      </div>
    </li>
  );
}
