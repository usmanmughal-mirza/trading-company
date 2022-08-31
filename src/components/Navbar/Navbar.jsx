import React, { useState } from 'react'
import "./navbar.css";
import {Link, useLocation} from "react-router-dom";
import {AiOutlineMenu} from "react-icons/ai";

const Menu =() =>{
  const [toggleSubMenu,setToggleSubMenu]=useState(false);
  const location=useLocation().pathname;
 console.log(location);

 const togglefun =() =>{
  setToggleSubMenu(!toggleSubMenu)
 }
  return(
<>
             <p ><Link to="/"  className='menu-link'> HOME </Link> </p>
             <div className="menu__submenu">
             <p className='hover-menu-link'  >
             <button  style={{background:"transparent",border:"none"}}
             onClick={() => setToggleSubMenu(!toggleSubMenu)} className='menu-link' 
             >BUSINESS </button>
             </p>

             {toggleSubMenu && (
              <div className="menu__submenu-div">
              <p><Link onClick={togglefun} to="/travel" className='submenu-link'> TRAVEL AND TOURISM </Link> </p>
              <p><Link onClick={togglefun} to="/hotels" className='submenu-link'> HOTELS AND RESTAURANTS </Link> </p>
              <p><Link onClick={togglefun} to="/real-estate" className='submenu-link'> REAL ESTATE DEVELOPMENT </Link> </p>
              <p><Link onClick={togglefun} to="/fabric" className='submenu-link'> FABRIC EXPORTS  </Link> </p>
              <p><Link onClick={togglefun} to="/poultry" className='submenu-link'> POULTRY EGGS </Link> </p>
              </div>
             )}  
             
             
             </div>
             {/*  style={{color:location !== "/" ? "black" : "white"}} */}

              <p><Link  to="/about" className='menu-link'> ABOUT US </Link></p>
               <p><Link  to="/contact" className='menu-link'> CONTACT </Link></p>
              <p><Link  to="/auth" className='menu-link'> SIGN IN </Link></p>
  </>
  )
}
  
  



const Navbar = () => {
  const [toggleMenu,setToggleMenu]=useState(false);
 
  const togglefun2 =() =>{
    setToggleSubMenu(false)
   }
  
  return (
    <>
    <nav>
      {/* for large devices --------- */}
      <div className="full-nav">
        {/* left div  */}
        <div className="nav__left">
          <Link to="/">
          <img
          //  src="https://images.unsplash.com/photo-1604307743907-df8d5fe9f1de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c2luZXNzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
         src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg?size=338&ext=jpg&ga=GA1.2.1096418406.1661852200"
         alt="nav-img"  />
         </Link>
        </div>
        {/* right  */}
        <div className="nav__right">
         <Menu />
        </div>
        {/* third ... menu icon  */}
        <div className="nav__menuicon">
          <span onClick={() => setToggleMenu(!toggleMenu)}><AiOutlineMenu  style={{width:"1.7rem",height:"1.7rem",cursor:"pointer"}}/> </span>
        </div>
        </div>

        {/* for mobile phone ----- */}
        {toggleMenu && (
           <div className="mobile-menu">
           <p ><Link onClick={togglefun2} to="/" className='mobile-menu-link'  > HOME </Link> </p>
           <p><Link onClick={togglefun2} to="/" className='mobile-menu-link'>BUSINESS  </Link> </p>
           <p><Link onClick={togglefun2} to="/about" className='mobile-menu-link'> ABOUT US </Link> </p>
           <p><Link onClick={togglefun2} to="/contact" className='mobile-menu-link'> CONTACT </Link> </p>
           <p><Link onClick={togglefun2} to="/auth" className='mobile-menu-link'> SIGN IN </Link> </p>
           </div>
        )}
       
        </nav>
        </>
  )
}

export default Navbar