import React, { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer';

const promise = loadStripe('pk_test_51NfHMZSC9Iw4OnfRanjXI9Mfx5xf7O2U8P7ahOVD6qADcztGqVt0WqjwGUUTvNqbmmkyHXEGN8f7BeIpN9tgkNP000deYmgBsC');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //will run once when the app component loads 
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>', authUser);

      if(authUser)
      {
        //user just loggedin / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      }
      else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])


  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/payment' element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          } />
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
