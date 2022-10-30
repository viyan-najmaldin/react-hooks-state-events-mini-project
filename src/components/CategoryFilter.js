import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  const buttons = categories.map((category) => (
    <button
      key={category}
      onClick={() => setSelectedCategory(category)}
      className={selectedCategory === category ? "selected" : ""}
    >
      {category}
    </button>
  ));
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;
