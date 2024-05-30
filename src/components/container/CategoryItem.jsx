import React from "react";

export default function CategoryItem({ label, title }) {
  console.log(title);
  return (
    <>
      <li
        className="category-item"
        style={title === "Mức giá" ? { width: "100%" } : {}}
      >
        <div className="category-item-filter">
          <input className="category-item-filter__check" type="checkbox" />
          <span>{label}</span>
        </div>
      </li>
    </>
  );
}
