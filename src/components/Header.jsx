import CartIcon from "../assets/cart.svg";
import Login from "../assets/login.svg";
import "../styles/Header.css";

function Header({ pageType, setPageType, cart }) {
  const cartItemCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <button className="btn logo-btn" onClick={() => setPageType("tv")}>
              <span className="logo-text">TechStore</span>
            </button>
          </div>
          <nav className="filter-buttons">
            <button
              className={`btn menu-btn ${pageType === "tv" ? "active" : "non-active"}`}
              onClick={() => setPageType("tv")}
            >
              TV
            </button>
            <button
              className={`btn menu-btn ${pageType === "phone" ? "active" : "non-active"}`}
              onClick={() => setPageType("phone")}
            >
              Phone
            </button>
            <button
              className={`btn menu-btn ${pageType === "laptop" ? "active" : "non-active"}`}
              onClick={() => setPageType("laptop")}
            >
              Laptop
            </button>
          </nav>
          <div className="buttons-container">
            <button
              className="btn right-btn"
              onClick={() => setPageType("cart")}
            >
              <img src={CartIcon} alt="cart" />
              {cartItemCount > 0 && (
                <span className="cart-badge">{cartItemCount}</span>
              )}
            </button>
            <button className="btn right-btn">
              <img src={Login} alt="login" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
