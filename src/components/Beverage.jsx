import React from "react";
import shake from "./Image/shake.jpg"
import Mojito from "./Image/Mojito&ColdCoffee.jpeg"
// import Milkshake from "./Image/Milkshake (2).jpeg"
import Chocolate from "./Image/chocolateMilkshake.jpeg"
import Lavender from "./Image/LavendarTea.jpeg"

export default function Beverages() { 
        return (
            <div>
                <h2 className="beverageHeading">Explore Recipes</h2>
                   <div className="signup_container">
                     <div className="purple_box" >
                       <h3>Beverages</h3>
                      <div>
                          <div className="img_container">
                              <img src={shake} alt="Shake" className="BevragesImg"/>
                              <img src={Mojito} alt="Mojito" className="BevragesImg" />
                              <img src={Chocolate} alt="Milkshake" className="BevragesImg"/>
                              <img src={Lavender} alt="Lavender" className="BevragesImg" />
                          </div>
                    </div> 

                    </div>
                </div>
            </div>
        );
    }

 
