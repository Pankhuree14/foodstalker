import React from 'react';
import { render } from '@testing-library/react';
// import Brownie from "./Image/Brownie.jpg";
// import Drinks from "./Image/Drinks.jpeg";
// import Dinner from "./Image/Dinner.jpeg"
import Beverages from "./Image/VezaSpecial.jpeg"
import Dinner from "./Image/GrillChicken.jpeg"
import  Dessert from "./Image/Waffle.jpeg"
import burger from "./Icons/burger.png"
import hotdog from "./Icons/hotdog.png"
import kebab from "./Icons/kebab.png"
import fries from "./Icons/fries.png"
import pizza from "./Icons/pizza.png"
import chicken from "./Icons/chicken.png"
import knife from "./Icons/knife.png"
import juice from "./Icons/juice.png"

function Foodstalker() 
 {
    return(<foodstalker>
        <div id="heading" style={{textAlign:'center'}}>
          <h1 style={{color:"#ffff", fontSize: 60}}>FOODSTALKER</h1>
          <p style={{color:"#ffff"}}>Let's stalk food</p>
          <img style={{opacity:"20%", marginLeft:"100px", marginBottom:"20px"}} src={burger} alt="burger" width="40px" />
          <img style={{opacity:"20%", marginLeft:"400px"}} src={hotdog} alt="hotdog" width="50px" />
          <img style={{opacity:"20%", marginLeft:"300px", marginTop:"-200px"}} src={kebab} alt="hotdog" width="60px" />
          <img style={{opacity:"20%", margin:"50%", marginTop:"60px"}} src={fries} alt="hotdog" width="50px" />
          <img style={{opacity:"20%", marginLeft:"200px", marginTop:"-700px"}} src={pizza} alt="hotdog" width="50px" />
          <img style={{opacity:"20%", marginLeft:"1000px", marginTop:"-60px"}} src={chicken} alt="hotdog" width="60px" />    
          <img style={{opacity:"20%", marginLeft:"1350px", marginTop:"-110px"}} src={knife} alt="hotdog" width="60px" /> 
          <img style={{opacity:"20%", marginLeft:"1100px", marginTop:"-200px"}} src={juice} alt="hotdog" width="60px" />
          <img style={{opacity:"20%", marginLeft:"1300px", marginTop:"-150px"}} src={pizza} alt="hotdog" width="60px" />        

          </div>
        <div className='img_container'>
          <img src={Beverages} alt="Food" className='banner_img'/>
          <img src={Dinner} alt="Food"  className='banner_img'/>
          <img src={Dessert} alt="coffee"  className='banner_img'/>
        </div>
          
     
          </foodstalker>);
        
    
} 
 
export default Foodstalker;


// style={{ display: "flex", justifyContent: "space-between" }}

