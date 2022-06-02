import React from "react";
import instaPage from "./Image/Profile.mp4"
import insta from "./Icons/instagram.png"

export default function InstaPage()  { 
        return (
            <div className='purple_box-small mostLiked 'style={{marginLeft:"2%",width:"25%"}}>
            <h3>Find me on</h3>
            <div style={{display:'flex'}}>
                <video src={instaPage}></video>
            </div>
            <a style={{color:"#FF02A2"}} href=""> <img src={insta} alt="" width={"20px"} /> _foodstalker </a>
    
        </div>
        );
    }