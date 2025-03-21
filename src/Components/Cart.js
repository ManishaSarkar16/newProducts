import React from 'react';

const Cart = ({ cartItems, changeCartQty, removeFromCart, total, remaining }) => {
  const gift = { id: 99, name: 'Mouse', price: 0 };
  const limit = 1000;

  return (
    <div className='products-section'>
      <div className='subtotal-wrapper'>
      <h2>Cart Items</h2>
      <div className='subtotal'><span>Subtotal</span><span><p> ${total}</p></span></div>
      {remaining > 0 && <h3>Add ${remaining} more for gift!</h3>}
      {remaining <= 0 && <h3>Gift added!</h3>}
      {remaining > 0 && (
        <div style={{ width: '100%', height: '10px', backgroundColor: '#eee', margin: '10px 0' }}>
          <div style={{ width: `${(total / limit) * 100}%`, height: '100%', backgroundColor: 'green' }}></div>
        </div>
      )}
      </div>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className='cart-items'>
              <span>{item.name} - ${item.price} x {item.quantity || 1}</span>
              {item.id !== gift.id && (
                <div className='cart-btn-wrapper'>
                  <button className='qyt_button min' onClick={() => changeCartQty(item.id, -1)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button className='qyt_button plus' onClick={() => changeCartQty(item.id, 1)}>+</button>
                  <button className='item-remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              )}
            </div>
          ))}
        </div>
        
      ) : (
        <p>Cart empty.</p>
      )}
    </div>
  );
};

export default Cart;