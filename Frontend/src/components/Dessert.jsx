import React from "react";
import Waffle from "./Image/Waffle.jpeg"
import Smoothie from "./Image/Smoothie.jpeg"
import Pancake from "./Image/Pancake.jpeg"
import IceCreame from "./Image/IceCeame.jpeg"

export default function Dessert() { 
        return (
            <div>
               <div className="signup_container">
                   <div className="purple_box">
                     <h3> Dessert</h3>
                    <div className="img_container">
                         <img src={Waffle} alt="Bao" className="BevragesImg" />
                         <img src={Smoothie} alt="Bao" className="BevragesImg" />
                         <img src={Pancake} alt="Bao" className="BevragesImg" />
                         <img src={IceCreame} alt="Bao" className="BevragesImg" />

                    </div> 

                    </div>
                </div>
            </div>
        );
    }

 
