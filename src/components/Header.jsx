import Cart from "../assets/cart.svg";
import Login from "../assets/login.svg";
import "../styles/Header.css";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="logo-container">
            <a href="tv">
              <span className="logo-text">TechStore</span>
            </a>
          </div>
          <nav className="filter-buttons">
            <button className="btn menu-btn active">TV</button>
            <button className="btn menu-btn non-active">Phone</button>
            <button className="btn menu-btn non-active">Laptop</button>
          </nav>
          <div className="buttons-container">
            <button className="btn right-btn">
              <img src={Cart} alt="cart" />
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