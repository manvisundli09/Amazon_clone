import React, { useEffect, useState } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { NumericFormat } from 'react-number-format';



function Payment() {
  const [{basket , user }, dispatch ] = useStateValue();
  const history = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error , setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

useEffect(() => {
    // generate stripe to allow us to charge customer
    
  },{})

  const handleSubmit = async(event) => {
    // promise working here
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement(CardElement)
    }
   }).then(({ paymentIntent }) => {
    //paymentIntent = payment confirmation
    setSucceeded(true);
    setError(null);
    setProcessing(false);

    history('/orders',{replace: true});
   } ) 

  }

  const handleChange = event => {
    // Listen for changes in CardElement
    // display any error as customer types card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  const getTotalPrice = (basket) =>{
    return basket?.reduce((total,item) => total + item.price,0)
  }

  return (
    <div className='payment'>
      <div className='payment_container'>
        <h1>
          Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
        </h1>
        {/*Delivery address*/}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>
          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>123 Lane</p>
            <p>Delhi, India</p>
          </div>

        </div>

        {/*Review item*/}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review Items and Delivery</h3>
          </div>
          <div className='payment_items'>
            {/*Products*/}
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

        {/*Payment method*/}      
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
            {/*Stripe work*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className='payment_priceContainer'>
              <NumericFormat
              renderText={(value) => ( 
              <> 
              <h3>Order Total: {value}</h3>
              </>
              )}
              
              decimalScale={2}
              value={getTotalPrice(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
              />
              <button disabled={processing || disabled || succeeded}>
                <span>
                  {processing ? <p>Processing</p> : "Buy Now"}
                </span>
              </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}


            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment;
