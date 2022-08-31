
import "./footer.css";
import Copywrite from "../copywrite/Copywrite";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__content">
        {/* first div -- */}
        <div className="footer__content-first">
          <h3>ABOUT </h3>
          <p>We are the best in the market and you must choose us as a career. We provide the best services and output because we contain an experienced team. </p>
        </div>

        {/* second div ---- */}
        <div className="footer__content-second">
          <h3>OUR SERVICES</h3>
          <ul>
            <li>TRAVEL AND TOURISM</li>
            <li>HOTELS AND RESTAURENTS</li>
            <li>REAL ESTATE DEVELOPMENT</li>
            <li>FABRIC EXPORT</li>
            <li>POULTRY EGGS </li>

          </ul>
        </div>

        {/* third ---- */}

          
          <div className="footer__content-third">
          <h3>QUICK LINKS</h3>
          <ul>
           <li>About</li>
           <li>Contact</li>
           <li>Blog</li>
           <li>404</li>

          </ul>
        </div>

        {/* fourth ------------- */}

        <div className="footer__content-fourth">
          <h3>CONNECT WITH US SOCIALLY</h3>
          <ul>
           <li>Facebook</li>
           <li>Twitter</li>
           <li>Youtube</li>
           <li>Github</li>

          </ul>
        </div>

      </div>

      <Copywrite />
      </div>
  )
}

export default Footer