
import "./businesses.css";
import {businesses} from "./businesses";
import {Link} from "react-router-dom";

const Businesses = () => {
  return (
    <>
    <div className="businesses">
      {/* heading ----------------- */}
      <div className="businesses__heading">
        <h1>Our Businesses</h1>
        <p>We have experiences of decade in the following.</p>
      </div>
      {/* cards ----------- */}
      <div className="businesses__content">
        {businesses.map( (card) =>(
          <div key={card.id} className="businesses__content-div">
            <img alt="card-img" src={card.img} />
            <h2>{card.heading} </h2>
            <Link to={card.link} > Read more </Link>
          </div>
        ))}
      </div>
    </div>
      
      </>
  )
}

export default Businesses