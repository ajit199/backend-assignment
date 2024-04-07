import React, { useState, useEffect } from "react";

function CategoriesComponent() {
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Fetch categories and user selections from backend
  useEffect(() => {
    // Assume fetchCategories and fetchUserSelections are functions to fetch data from the backend
    fetchCategories().then((categories) => setCategories(categories));
    fetchUserSelections().then((selectedCategories) =>
      setSelectedCategories(selectedCategories)
    );
  }, []);

  // Function to toggle category selection
  const toggleCategory = (categoryId) => {
    const isSelected = selectedCategories.includes(categoryId);
    if (isSelected) {
      setSelectedCategories(
        selectedCategories.filter((id) => id !== categoryId)
      );
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };

  // Function to save category selections to backend
  const saveSelections = () => {
    // Assume saveUserSelections is a function to save user selections to the backend
    saveUserSelections(selectedCategories);
  };

  return (
    <div>
      <h2>Categories</h2>
      {categories.map((category) => (
        <div key={category.category_id}>
          <input
            type="checkbox"
            checked={selectedCategories.includes(category.category_id)}
            onChange={() => toggleCategory(category.category_id)}
          />
          <label>{category.category_name}</label>
        </div>
      ))}
      <button onClick={saveSelections}>Save Selections</button>
    </div>
  );
}

export default CategoriesComponent;
