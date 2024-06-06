import React from "react";

export default function CategoryItem({ label, title }) {
  return (
    <>
      <li
        className="category-item"
        style={title === "Mức giá" ? { width: "100%" } : {}}
      >
        <div className="category-item-filter">
          <input
            id={`filter-${label}`}
            className="category-item-filter__check"
            type="checkbox"
          />
          <label htmlFor={`filter-${label}`}>
            <span>{label}</span>
          </label>
        </div>
      </li>
    </>
  );
}
