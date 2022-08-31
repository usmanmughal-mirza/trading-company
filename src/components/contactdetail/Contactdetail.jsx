
import React from 'react'
import "./contactdetail.css";

const Contactdetail = () => {
  return (
    <div className='contactdetail'>
        {/* left ----------------------------- */}
        <div className="contactdetail__left">
            <h1>Contact Details</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, vero, provident, eum eligendi blanditiis ex explicabo vitae nostrum facilis asperiores dolorem illo officiis ratione vel fugiat dicta laboriosam labore adipisci.
            </p>

            <div className="contactdetail__left-contact">
                <p>Cornwall Rd, Croydon CR0 3RD, United Kingdom </p>
                <p> Phone: +442013266900</p>
                <p> Email: linktradersint@gmail.com</p>
            </div>

            <div className="contactdetail__left-icons">
                facebook..twittter
            </div>
        </div>
        {/* right ------------------ */}
        <div className="contactdetail__right">
            <form action="">
              
                <div className="form-input">
                    <input type="text" placeholder='Your Name'/>
                </div>

                <div className="form-input">
                    <input type="text" placeholder='Your Phone'/>
                </div>

                <div className="form-input">
                    <input type="text" placeholder='Your Country'/>
                </div>

                <div className="form-input">
                    <input type="text" placeholder='Your Email'/>
                </div>

                <div className="form-input">
                    <input type="text" placeholder='subject'/>
                </div>

                <div className="form-input">
                    <input type="text" placeholder='Your Name'/>
                </div>

                <div className="form-input form-input__message">
                    <input type="textarea" placeholder='message'/>
                </div>

                <div className="form-input-btn">
                    <button>SUBMIT </button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Contactdetail