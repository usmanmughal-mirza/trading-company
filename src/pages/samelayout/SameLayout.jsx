
import React from 'react'
import "./samelayout.css";

const SameLayout = ({data}) => {

  return (
    <div className='samelayout'>
      {data.map( (result) =>(
        <>
        <div className="samelayout__content">
          <h1>{result.heading} </h1>
          <p>{result.para} </p>
        </div>

        {/* // flex   ---- */}

        <div className="samelayout__flex">
          <div className="samelayout__flex-img">
            <img src={result.img} alt="img" />
          </div>
          <div className="samelayout__flex-list">
            <ul>
              {result.list.map( (li) => (
                <li>{li} </li>
              ))}
            </ul>
          </div>
        </div>
        </>
      ))}
      

    </div>
  )
}

export default SameLayout