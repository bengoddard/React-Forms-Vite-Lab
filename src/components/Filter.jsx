import React, {useState} from "react";

function Filter({ selectedCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={search} onChange={(e)=>onSearchChange(e.target.value)}/>
      <select name="filter" value={selectedCategory} onChange={(e)=>onCategoryChange(e.target.value)}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;