import ProductCard from "../components/ProductCard";
import "../styles/ProductList.css";
import Sidebar from "./Sidebar";

function ProductList({ products, cart, onCartChange }) {
  return (
    <>
      {/*<p className="total-amount">{products.length} products</p>*/}
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            cartQuantity={cart[product.id] || 0}
            onCartChange={onCartChange}
          />
        ))}
      </div>
    </>
  );
}

export default ProductList;
