import { useMemo } from "react";
import { products } from "../data/products";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

function Cart({ cart, onCartChange, setPageType }) {
  const cartItems = useMemo(() => {
    return Object.entries(cart)
      .filter(([_, qty]) => qty > 0)
      .map(([id, qty]) => {
        const product = products.find((p) => p.id === parseInt(id));
        return { product, quantity: qty };
      })
      .filter((item) => item.product);
  }, [cart]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const tax = (subtotal * 0.08);
  const total = (subtotal + parseFloat(tax));

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1 className="cart-heading">Shopping Cart</h1>
        <p className="empty-cart">Your cart is empty</p>
        <button
          className="btn continue-shopping"
          onClick={() => setPageType("tv")}
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <main>
      <div className="cart-container">
        <h1 className="cart-heading">Shopping Cart</h1>
        <div className="cart-wrapper">
          <div className="goods-container">
            {cartItems.map(({ product, quantity }) => (
              <CartItem
                key={product.id}
                product={product}
                quantity={quantity}
                onCartChange={onCartChange}
              />
            ))}
          </div>
          <div className="order-summary">
            <h2>Order Summary</h2>
            <p className="subtotal">
              Subtotal
              <span>
                $
                {subtotal.toLocaleString("en-US", { minimumFractionDigits: 2 })}
              </span>
            </p>
            <p className="tax">
              Tax 8% <span>${tax.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
            </p>
            <p className="shipping">
              Shipping <span>Calculated at checkout</span>
            </p>
            <p className="total">
              Total <span>${total.toLocaleString("en-US", { minimumFractionDigits: 2 })}</span>
            </p>
            <button className="cart-btn checkout-btn">Proceed to Checkout</button>
            <button className="cart-btn back-btn" onClick={() => setPageType("tv")}>
              Back to Shopping
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;
