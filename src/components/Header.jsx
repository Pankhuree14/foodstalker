import React from 'react';
import { render } from '@testing-library/react';
import insta from "./Icons/instaBlack.png"
import sign from "./Icons/Message.png"
function Header(){
  return(<header><nav class="navbar navbar-light bg-light">
           <div class="container-fluid">
             <a class="navbar-brand" style={{color:"#FF02A2"}}>Foodstalker</a>
         
               <div class="topbuttons">
               <button  type="submit">Follow 
               <img style={{opacity:"40%"}} src={insta} alt="insta" width={"20px"}/>
               </button>
               
               <button  type="submit">Sign Up
               <img style={{opacity:"40%"}} src={sign} alt="insta" width={"25px"}/>
               </button>
               </div>
           </div>
        </nav>
        </header>);
}
 
export default Header;


// "btn btn-outline-success"