import React, { useState } from 'react';
import ProductList from './components/ProductList';
import productData from '../db.json';

const App = () => {
  // TODO: Define initial product data

  // Create a new state variable to store products, initially from db.json
  const [products, setProducts] = useState(productData.products);

  // TODO: Implement state to manage filtering
  const [showInStockOnly, setShowInStockOnly] = useState(false);

  // TODO: Add buttons to allow filtering by availability
  const handleToggleFilter = () => {
    setShowInStockOnly((prev) => !prev);
  };

  // TODO: Implement logic to filter products based on availability
  const filteredProducts = showInStockOnly
    ? products.filter((p) => p.inStock)
    : products;

  // Handler to remove a product by id
  const handleRemoveProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>

      {/* TODO: Add buttons to allow filtering by availability */}
      <button onClick={handleToggleFilter}>
        {showInStockOnly ? 'Show All' : 'Show In Stock Only'}
      </button>

      {/* TODO: Render the ProductList component and pass filtered products and remove handler */}
      <ProductList products={filteredProducts} onRemove={handleRemoveProduct} />
    </div>
  );
};

export default App;
