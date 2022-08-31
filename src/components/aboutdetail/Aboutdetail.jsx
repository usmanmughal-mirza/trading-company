
import "./aboutdetail.css";

const Aboutdetail = () => {
  return (
    <div className="aboutdetail">
        {/* upper section ------------------------------  ----
        ----------------------------------------------------  */}
        <div className="aboutdetail-upper">
          {/* first div ----- */}
          <div className="aboutdetail-upper__left">
            <h1>A WELL-KNOWN <br /> BUSINESS HUB </h1>
            <p> Link Traders International is a successful business company with rapidly growing multiple businesses. We provide the best business platform for those who have capital but they lack in business expertise. We assure you that your dreams will come true here.</p>
            <ul>
              <li>We are EXPERT </li>
              <li>We are LOYAL </li>
              <li>We are INNOVATIVE </li>
            </ul>
          </div>
          {/* second div ------------ */}
          <div className="aboutdetail-upper__right">
            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3VpdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=700&q=60"
             alt="suit-img" />
          </div>
        </div>
        {/* lower section ------------------------------------- 
        -------------------------------------------------------*/}
        
        <div className="aboutdetail-lower">
          {/* left ------------------------ */}
          <div className="aboutdetail-lower__left">
            <h1>WE ARE THE BEST</h1>
            <p>
            We are the best in the market and you must choose us as a career. We provide the best services and output because we contain an experienced team. We believe in the best after-sales services & we have a dedicated team to guide you towards prosperity and money freedom. We don't apply & hidden charges or conditions.
            </p>
            <img src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="meeting-pic-1" />
          </div>
          {/* right --------------- */}
          <div className="aboutdetail-lower__right">
            <h1>PROSPERITY FOR ALL</h1>
            <p>
            Our vision is to provide a business platform for both investors and the sales team where every person can work in a friendly environment. We want to spread prosperity around the globe. We enjoy the flexibility of a lean, independent company structure for best liaising with a knowledgeable clientele.
            </p>
            <img src="https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            alt="meeting-pic-2" />
          </div>
        </div>

        </div>
  )
}

export default Aboutdetail