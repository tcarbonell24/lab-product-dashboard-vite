import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  return (
    <div className={product.inStock ? styles.card : "outOfStockClass"}>
      {/* Display product name */}
      <h2>{product.name}</h2>

      {/* Display product price */}
      <p>Price: {product.price}</p>

      {/* Show stock status */}
      <p>
        {product.inStock ? (
          <span className={styles.inStock}>In Stock</span>
        ) : (
          <span className={styles.outOfStockLabel}>Out of Stock</span>
        )}
      </p>

      {/* Add Remove button */}
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
