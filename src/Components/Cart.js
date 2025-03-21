import React from 'react';

const Cart = ({ cartItems, changeCartQty, total, remaining }) => {
  const gift = { id: 99, name: 'Wireless Mouse', price: 0 };
  const limit = 1000;

  return (
    <div className='products-section'>
      <h2>Cart Summary</h2>
      <div className='subtotal-wrapper'>
      <div className='subtotal'><span className='heading'>Subtotal</span><span className='heading'><p> ₹{total}</p></span></div>
        {remaining <= 0 && <h3>You got a Free Wireless Mouse!</h3>}
        {remaining > 0 && (
          <div className='progress-bar-outer'>
            <h3>Add ₹{remaining} more to get a Free Wireless Mouse!</h3>
            <div className='progress-bar'>
              <div style={{ width: `${(total / limit) * 100}%`, height: '100%', backgroundColor: '#4f83e1' }}></div>
            </div>
          </div>
        )}
      </div>
      <h2>Cart Items</h2>
      {cartItems.length > 0 ? (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className='cart-items'>
              <span><div className='cart-name'>{item.name}</div>  ₹{item.price} x {item.quantity || 1} = ₹{item.price * (item.quantity || 1) }</span>
              {item.id !== gift.id && (
                <div className='cart-btn-wrapper'>
                  <button className='qyt_button min' onClick={() => changeCartQty(item.id, -1)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button className='qyt_button plus' onClick={() => changeCartQty(item.id, 1)}>+</button>
                  {/* <button className='item-remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button> */}
                </div>
              )}
              {item.id === gift.id && (<span className='free-gift-span'>FREE GIFT</span>)}
            </div>
          ))}
        </div>
        
      ) : (
        <div className='cart-empty-state'>
        <p className='empty-title'>your Cart is empty.</p>
        <span>add some products to see them here!</span>
        </div>
      )}
    </div>
  );
};

export default Cart;