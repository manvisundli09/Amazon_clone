import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img className='home_image' alt='' src='https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Half_CA/PC_hero/3000x1200_HalfCA_V1._CB598892965_.jpg' />

        <div className='home_row'>
            {/*Product*/}
            <Product id={12345671} title="The War Before The War: A Vietnam War Novel (The Airmen Series) Paperback: February 26, 2020" price={19.94} image='https://m.media-amazon.com/images/P/B0851L9SQS.01._SCLZZZZZZZ_SX500_.jpg' rating={4}
            />
            <Product id={12345672} title="Dove Body Wash with Pump Deep Moisture For Dry Skin Moisturizing Skin Cleanser" price={8.99} image='https://m.media-amazon.com/images/I/71lPw5gA3-L._SL1500_.jpg' rating={5} />
            <Product id={12345673} title="Bluetooth Speaker, IPX5 Waterproof Speaker with HD Sound, Up to 24H Playtime, TWS Pairing, BT5.3" price={26.99} image='https://m.media-amazon.com/images/I/81djh1gfUwL._AC_SL1500_.jpg' rating={5} />
        </div>

        <div className='home_row'>
            {/*Product*/}
            <Product id={12345676} title="Multi USB Charging Adapter Cable Kit, USB C to Lighting Adapter Box(Pink)" price={9.99} image='https://m.media-amazon.com/images/I/61N0MxAJJqL._SL1200_.jpg' rating={4}/>
            <Product id={12345677} title="SAMSUNG Galaxy S23 Cell Phone, Factory Unlocked Android Smartphone" price={799} image='https://m.media-amazon.com/images/I/71ZXHg7Oh6L._AC_SL1500_.jpg' rating={5}/>
            <Product id={12345678} title="A40 Pro Wireless Earbuds, 50Hrs Playtime,Bluetooth Headphones with Stereo Sound" price={59.99} image='https://m.media-amazon.com/images/I/61d0f7eLrEL._AC_SL1500_.jpg' rating={4}/>
            <Product id={12345679} title="Smart Watch for Android Phones iPhone Compatible 1.7 | Sleep Monitor | Women & Men" price={37.88} image='https://m.media-amazon.com/images/I/61XNprkd2+L._AC_SL1500_.jpg' rating={4}/>
        </div>

        <div className='home_row'>
            {/*Product*/}
            <Product id={123456710} title="Homemory 12Pcs Flickering Flameless Candle Battery Operated | 200+Hours" price={6.99} image='https://m.media-amazon.com/images/I/619zifj5htL._AC_SL1500_.jpg' rating={5}/>
            <Product id={123456711} title="STORi SimpleSort 6-Piece Stackable Clear Drawer Organizer Set | Multi-size Trays " price={15.99} image='https://m.media-amazon.com/images/I/71CDFmK2qNS._AC_SL1500_.jpg' rating={5}/>
            <Product id={123456712} title="WEMIABL FarmHouse Home Wall Decor Sign Inspirational Sign for Home Freestanding" price={13.99} image='https://m.media-amazon.com/images/I/81WB8fi+1gL._AC_SL1500_.jpg' rating={3}/>
        </div>

      </div>
    </div>
  )
}

export default Home
