import React, { useState } from "react";
import SpecialDeal from "./SpecialDeal";
import "../styles/SideBar.css";
import Input from "./Input";
import Button from "./Button";

function Sidebar({ brands, selectedBrand, onBrandChange }) {
  return (
    <>
      <div className="filters-container">
        <p className="filters-heading">Filters</p>
        <label className="filters-label" htmlFor="brand-select">
          Brand
        </label>
        <select
          className="brand-select"
          value={selectedBrand}
          onChange={(e) => onBrandChange(e.target.value)}
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
          <Input placeholder="0" className="min-range" />{" "}
          <Input placeholder="5000" className="max-range" />
        </div>

        <Button className="filters-apply">Apply Filters</Button>
      </div>
      <div className="special-deal">
        <SpecialDeal />
      </div>
    </>
  );
}

export default Sidebar;
