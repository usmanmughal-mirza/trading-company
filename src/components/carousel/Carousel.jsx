
import Carousel from 'react-bootstrap/Carousel';
import "./carousel.css";

function IndividualIntervalsExample() {
  return (
    <Carousel className="carousel-div">
        {/* first item ------- */}
      <Carousel.Item className="carousel-div__sub1" interval={5000} >
       <div style={{background:"rgba(0, 0, 0, 0.624)",height:"inherit"}}>
        
     
        <Carousel.Caption className="carousel__caption">
        <h1>HOTELS AND RESTAURANT</h1>
        <p>
        We have a grand hotels and restaurant chain in all the important tourist areas in Pakistan We provide all essential facilities and friendly environment to our customers. Our this chain is growing day by day and customers believe in us is increasing as well.
        </p>
        <button>Explore Us</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* second ------ */}
      <Carousel.Item className="carousel-div__sub2" interval={2000}>
      <div style={{background:"rgba(0, 0, 0, 0.624)",height:"inherit"}}>

        <Carousel.Caption className="carousel__caption">
         <h1>REAL ESTATE DEVELOPMENT </h1>
         <p>
         Real estate is a rapidly growing business these days and we also invested a lot in this amazing field. We buy and sell properties in key areas We also develop new projects from land to an amazing living paradise. We have developed many successful projects as joint venture. We are increasing our interest in this area.
         </p>
         <button>Explore Us</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>

      {/* third ----- */}
      <Carousel.Item className="carousel-div__sub3" interval={2000}>
      <div style={{background:"rgba(0, 0, 0, 0.624)",height:"inherit"}}>

        <Carousel.Caption className="carousel__caption">
          <h1>POULTRY EGGS</h1>
          <p>
          The livestock business is increasing these days and we also deal in poultry. In this field we supply eggs and we are one of the largest suppliers. We have a complete setup from the farm to the wholesale dealers. We have trained technical and medical staff to ensure the best results.
          </p>
          <button>Explore Us</button>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;