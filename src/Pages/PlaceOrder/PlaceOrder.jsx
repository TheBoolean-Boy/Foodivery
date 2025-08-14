import { useContext } from 'react';
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <>
      <Navbar />
      <form className="place-order">

        {/* Left Side of Place Order Page */}
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder='First name' />
            <input type="text" placeholder='Last name' />
          </div>
          <input type="email" placeholder='Email address' />
          <input type="text" placeholder='Street' />
          <div className="multi-fields">
            <input type="text" placeholder='City' />
            <input type="text" placeholder='State' />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder='Zip code' />
            <input type="text" placeholder='Country' />
          </div>
          <input type="text" placeholder='Phone' />
        </div>

        {/* Right Side of Place Order Page */}
        <div className="place-order-right">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount() ? 2 : 0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount() ? getTotalCartAmount() + 2 : 0}</b>
              </div>
            </div>
            <button onClick={() => navigate('/order')}>PROCEED TO PAYMENT</button>
          </div>
        </div>
      </form>
      <Footer />
    </>

  )
}

export default PlaceOrder;