import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img className='checkout_add' src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/ShopWithPoints/PC_Sliced_01_revised.jpg' alt=''/>

            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className='checkout_title'>Your Shopping Basket</h2>

                {/*Basket Items*/}
                {basket.map(item => (
                  <CheckoutProduct 
                   id = {item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}

                  />
                ))}
            </div>
        </div>
        <div className='checkout_right'>
            {/*Subtitle component*/}
            <Subtotal />
        </div>

    </div>
  )
}

export default Checkout;
