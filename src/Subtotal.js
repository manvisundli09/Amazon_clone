import React from 'react';
import "./Subtotal.css" ;
import {NumericFormat} from 'react-number-format';
import { useStateValue } from './StateProvider';
import { useNavigate } from 'react-router-dom';

function Subtotal() {
  const history = useNavigate();

  const [{basket} , dispatch] = useStateValue();

  const getTotalPrice = (basket) =>{
    return basket?.reduce((total,item) => total + item.price,0)
  }

  return (
    <div className='subtotal'>
      <NumericFormat

         renderText={(value) => ( 
            <>  <>
                    <p>
                        Subtotal ({basket?.length} items):
                        <strong>{value}</strong>
                    </p>
                </>
                <small className='subtotal_gift'>
                  <input type='checkbox' />This order contains a gift
                </small>
            </>
        )}

        decimalScale={2}
        value={getTotalPrice(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button onClick={e => history('/payment')} >Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
