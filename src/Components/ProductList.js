import React from 'react';

const ProductList = ({ items, changeQty, addToCart }) => (
    <div className='products-section'>
      <h2>Products</h2>
      <div className='product-row'>
        {items.map(item => (
          <div key={item.id} className='product-col'>
            <div className='heading-content'><div>{item.name}</div> <div> ${item.price}</div></div>
            <div className='button-outer'>
              <button className='qyt_button min' onClick={() => changeQty(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button className='qyt_button plus' onClick={() => changeQty(item.id, 1)}>+</button>
            </div>
            <button className='add-to-cart-button' onClick={() => addToCart(item.id)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
  
export default ProductList;