import React from 'react'
import { Link } from 'react-router-dom'

const FooterDark = () => {
  return (
    <div className="footer-dark-box footer-box">
        <div className="first-foot-box">
          <img src="https://i.postimg.cc/66PYwyr7/logo-brand.png" alt="logo" className='logo'/>
          <p>Explore the world of flavors with EatsVoyage, where culinary adventures await. Elevate your tastebuds and savor the journey.</p>
          <div class="social-icons-footer">
          <a href="https://www.facebook.com/k.saiuttej/"  target="_blank" class="facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://instagram.com/ig_.trigger?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" class="instagram"><i class="fab fa-instagram"></i></a>
            <a href="https://www.linkedin.com/in/sai-uttej-k" target="_blank" class="linkedin"><i class="fab fa-linkedin-in"></i></a>
          </div>
          <p>© 2023 Eats Voyage by Sai Uttej</p>
        </div>
        <div className="footer-first-box-mobile">
          <img src="https://i.postimg.cc/66PYwyr7/logo-brand.png" alt="logo" className='logo'/>
          </div>
        <div className="second-foot-box">
          <div className="second-foot-head">
            <h2 className="footer-dark-header">Menu Marvel</h2>
            <hr />
          </div> 
          <ul>
            <li className="foot-nav-item"><Link to="/"  className="foot-nav-item">Home</Link></li>
            <li className="foot-nav-item"><Link to="/search"  className="foot-nav-item">Search</Link></li>
            <li className="foot-nav-item"><Link to="/random"  className="foot-nav-item">Random</Link></li>
            </ul>
          </div>
          <div className="third-foot-box">
            <div className="third-foot-head">
              <h2 className="footer-dark-header">About Us</h2>
              <hr />
            </div> 
            <p>At EatsVoyage, we're your passport to global flavors, offering a world of recipes and culinary inspiration. Join us on this delicious journey!</p>
            <div className="contact-box">
              <h3 className="footer-dark-header">Contact Us</h3>
              <hr />
            </div>
            <p>Email: ksaiuttej@gmail.com</p>
          </div>
    </div>
  )
}

export default FooterDark
