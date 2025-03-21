import React, { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './App.css';

const productData = [
  { id: 1, name: 'Laptop', price: 500 },
  { id: 2, name: 'Smartphone', price: 300 },
  { id: 3, name: 'Headphones', price: 100 },
  { id: 4, name: 'Watch', price: 150 },
];

const gift = { id: 99, name: 'Mouse', price: 0 };
const limit = 1000;

const App = () => {
  const [items, setItems] = useState(productData.map(item => ({ ...item, quantity: 0 })));
  const [cartItems, setCartItems] = useState([]);
  const [giftAdded, setGiftAdded] = useState(false);
  const total = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const remaining = limit - total;

  const add = id => {
    const product = items.find(p => p.id === id);
    if (product && product.quantity > 0) {
      const exists = cartItems.find(item => item.id === id);
      setCartItems(prev =>
        exists
          ? prev.map(item => (item.id === id ? { ...item, quantity: item.quantity + product.quantity } : item))
          : [...prev, { ...product }]
      );
      setItems(prev => prev.map(p => (p.id === id ? { ...p, quantity: 0 } : p)));
    }
  };

  const changeQty = (id, change) => {
    setItems(prev => prev.map(item => (item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item)));
  };

  const changeCartQty = (id, change) => {
    setCartItems(prev => prev.map(item => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)));
  };

  const remove = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    if (total >= limit && !giftAdded) {
      setCartItems(prev => [...prev, gift]);
      setGiftAdded(true);
    } else if (total < limit && giftAdded) {
      setCartItems(prev => prev.filter(item => item.id !== gift.id));
      setGiftAdded(false);
    }
  }, [total, giftAdded]);

  return (
    <div className='outer-container'>
      <h1 className='product-heading'>Shopping Cart</h1>
      <ProductList items={items} changeQty={changeQty} addToCart={add} />
      <Cart cartItems={cartItems} changeCartQty={changeCartQty} removeFromCart={remove} total={total} remaining={remaining} />
    </div>
  );
};

export default App;