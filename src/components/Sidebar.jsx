import { useState } from "react";
import SpecialDeal from "./SpecialDeal";
import "../styles/SideBar.css";
import Input from "./Input";
import Button from "./Button";

function Sidebar({ brands, onApplyFilters }) {
  const [brand, setBrand] = useState("");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("5000");

  const handleApply = () => {
    onApplyFilters({ brand, minPrice, maxPrice });
  };

  return (
    <>
      <div className="filters-container">
        <p className="filters-heading">Filters</p>
        <label className="filters-label" htmlFor="brand-select">
          Brand
        </label>
        <select
          className="brand-select"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          id="brand-select"
        >
          <option value="" className="brand-option"></option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <label className="filters-label">Price Range</label>
        <div className="price-range">
          <Input
            placeholder="0"
            className="min-range"
            placeholder="0"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="min-range"
          />
          <Input
            placeholder="5000"
            className="max-range"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="max-range"
          />
        </div>

        <Button className="filters-apply" onClick={handleApply}>
          Apply Filters
        </Button>
      </div>
      <div className="special-deal">
        <SpecialDeal />
      </div>
    </>
  );
}

export default Sidebar;
