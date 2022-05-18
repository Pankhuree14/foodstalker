import React from "react";
import Bao from "./Image/Bao.jpeg"
import Feast from "./Image/feast.jpg"
import Momos from "./Image/Momos.jpeg"
import Nachos from "./Image/Nachos.jpeg"

export default function MainCourse() { 
        return (
            <div>
               <div className="signup_container">
                   <div className="purple_box">
                     <h3> Main Course</h3>
                    <div>
                        <div className="img_container">
                         <img src={Bao} alt="Bao" className="BevragesImg" />
                         <img src={Feast} alt="Bao" className="BevragesImg" />
                         <img src={Momos} alt="Bao" className="BevragesImg" />
                         <img src={Nachos} alt="Bao" className="BevragesImg" />

                        </div>
                </div> 

                    </div>
                </div>
            </div>
        );
    }

 
