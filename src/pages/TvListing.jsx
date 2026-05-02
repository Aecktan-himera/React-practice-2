import { useState, useMemo } from "react";
import { products } from "../data/products";
import Sidebar from "../components/Sidebar";
import ProductList from "../components/ProductList";
import "../styles/Content.css";

function Tvlisting({ cart, onCartChange }) {
  const category = "tv";
  const [appliedFilters, setAppliedFilters] = useState({
    brand: "",
    minPrice: "0",
    maxPrice: "5000",
  });
  const [sortOrder, setSortOrder] = useState("price-asc");

  const brands = useMemo(() => {
    const catProducts = products.filter((p) => p.category === category);
    return [...new Set(catProducts.map((p) => p.brand))];
  }, [category]);

  const filteredProducts = useMemo(() => {
    let list = products.filter((p) => p.category === category);

    if (appliedFilters.brand) {
      list = list.filter((p) => p.brand === appliedFilters.brand);
    }

    const min = appliedFilters.minPrice
      ? parseFloat(appliedFilters.minPrice)
      : 0;
    const max = appliedFilters.maxPrice
      ? parseFloat(appliedFilters.maxPrice)
      : Infinity;
    list = list.filter((p) => p.price >= min && p.price <= max);

    list.sort((a, b) => {
      if (sortOrder === "price-asc") return a.price - b.price;
      if (sortOrder === "price-desc") return b.price - a.price;
      return 0;
    });

    return list;
  }, [appliedFilters, sortOrder, category]);

  return (
    <>
      <aside>
      <Sidebar brands={brands} onApplyFilters={setAppliedFilters} />
      </aside>
      <main>
      <div className="sort-bar">
        <p className="total-amount">{filteredProducts.length} products</p>
        <label className="sort-by" htmlFor="product-select">
          Sort by:
          <select
            id="product-select"
            className="product-select"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </label>
      </div>
      <ProductList
        products={filteredProducts}
        cart={cart}
        onCartChange={onCartChange}
      />
      </main>
    </>
  );
}

export default Tvlisting;
