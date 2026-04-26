import { useMemo } from "react";
import Sidebar from "../components/Sidebar";
import ProductList from "./ProductList";
import { products } from "../data/products";
import "../styles/Content.css";

function Content({
  activeCategory, // пока не используется
  selectedBrand,
  onBrandChange,
  sortOrder,
  onSortOrderChange,
}) {
  const filteredProducts = useMemo(
    () => products.filter((p) => p.category === "tv"),
    [],
  );

  const brands = useMemo(
    () => [...new Set(products.map((p) => p.brand))],
    [products],
  );

  return (
    <div className="wrapper">
      <aside>
        <Sidebar
          brands={brands}
          selectedBrand={selectedBrand}
          onBrandChange={onBrandChange}
        />
      </aside>
      <main>
        <div className="sort-bar">
          <p className="total-amount">{filteredProducts.length} products</p>
          <label className="sort-by" htmlFor="product-select">
            Sort by:
            <select
              className="product-select"
              value={sortOrder}
              onChange={(e) => onSortOrderChange(e.target.value)}
            >
              <option value=""></option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </label>
        </div>
        <ProductList products={filteredProducts} />
      </main>
    </div>
  );
}

export default Content;
