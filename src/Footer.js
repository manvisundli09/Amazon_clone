import React from 'react';
import "./Footer.css";
import { useState } from 'react';

function Footer() {
    const [isScrolling, setIsScrolling] = useState(false);

  const handleBackToTopClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  // Add a scroll event listener to track scrolling
  window.addEventListener("scroll", handleScroll);
  return (
    <div className='footer'>
      <div className={`footer_backtop ${isScrolling ? "visible" : ""}`} onClick={handleBackToTopClick}>
            <span>Back to Top</span>
        </div>
        <div class="footer_detail">
            <div class="footer_table">
                <div>
                    <div class="footer_thead">Get to know us</div>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>About Amazon</li>
                        <li>Invester Relations</li>
                        <li>Amazon Advice</li>
                    </ul>
                </div>
            </div>
            <div class="footer_table">
                <div>
                    <div class="footer_thead">Connect with Us</div>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
            <div class="footer_table">
                <div>
                    <div class="footer_thead">Let Us Help You</div>
                    <ul>
                        <li>Your Account</li>
                        <li>Returns Center</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>100% Purchase Protection</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>
        </div>
         <div class="footer_line"></div>
         <div class="footer_copy">
            <span>&copy; Designed by Manvi Sundli</span>
         </div>
    </div>
  )
}

export default Footer
