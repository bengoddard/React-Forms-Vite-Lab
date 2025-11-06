import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [list, setList] = useState(items);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  //Function to handle adding item to list
  function handleAddItem(newItem) {
    setList((prev) => [...prev, newItem]);
  }
  //Function to handle category changing to display updated list
  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
  //Function to handle search change and display updated list that matches search
  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  const itemsToDisplay = list.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} search={searchTerm} onSearchChange={handleSearchChange}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;