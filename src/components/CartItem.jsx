import trashIcon from "../assets/trash.svg";
import "../styles/CartItem.css"

function CartItem({ product, quantity, onCartChange }) {
  const { id, images, brand, model, price } = product;
  const lineTotal = price * quantity; // integer

  return (
     <div className="cart-item">
      <div className="cart-item__image">
        <img src={images[0]} alt={model} />
      </div>

      <div className="cart-item__content">
        <div className="cart-item__info">
          <p className="cart-item__brand">{brand}</p>
          <p className="cart-item__model">{model}</p>
        </div>

        <div className="cart-item__bottom">
          <div className="cart-item__counter">
            <button className="btn-minus"
              onClick={() => onCartChange(id, quantity - 1)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span>{quantity}</span>
            <button className="btn-plus"
              onClick={() => onCartChange(id, quantity + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <p className="cart-item__price">
            ${lineTotal.toLocaleString("en-US")}
          </p>
        </div>
      </div>

      <button
        className="cart-item__remove"
        onClick={() => onCartChange(id, 0)}
        aria-label="Remove item"
      >
        <img src={trashIcon} alt="Remove" />
      </button>
    </div>
  );
}

export default CartItem;
