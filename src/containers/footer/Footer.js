import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <div className="gpt3__footer section__padding">
      
        <div className="gpt3__footer-links">
        
          <div className="gpt3__footer-links_div">
            <h4>Links</h4>
            <p>Overons</p>
            <p>Counters</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Company</h4>
            <p>Terms & Conditions </p>
            <p>Privacy Policy</p>
          </div>
          <div className="gpt3__footer-links_div">
            <h4>Get in touch</h4>
            <p>maombibetets@gmail.com</p>
            <p>0655007457</p>
          </div>
        </div>

        <div className="gpt3__footer-copyright">
          <p>All rights reserved.</p>
        </div>
      </div>
    );
}

export default Footer
