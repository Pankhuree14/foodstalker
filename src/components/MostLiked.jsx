import React from "react";
import Nachos from "./Image/Nachos.jpeg"
import Pancake from "./Image/Pancake.jpeg"
import Momos from "./Image/Momos.jpeg"
import fries from "./Image/frues.jpeg"
import Bao from "./Image/Bao.jpeg"
export default function MostLiked() {
      return (
          <div className="purpleBox-xSmall">
              <div>
                  <h3 style={{textAlign:"center",backgroundColor:"#FF02A2",backgroundSize:"50px"}} >Most Liked</h3>
                  <div className="like_wrapper" >
                      <img src={Nachos} alt="Nachos" className="MostLikedImg" />
                      <span style={{fontSize:"25px"}}>1) Nachos</span>
                     <a href=""><button className="review_btn">Review</button></a> 
                  </div>
                  <div className="like_wrapper">
                      <img src={Pancake} alt="Pancake" className="MostLikedImg" />
                      <span style={{fontSize:"25px"}}>2) Pancake</span>
                      <a href=""><button className="review_btn">Review</button></a>                   </div>
                  <div className="like_wrapper">
                      <img src={Momos} alt="Momos" className="MostLikedImg" />
                      <span style={{fontSize:"25px"}}>3) Momos</span>
                      <a href=""><button className="review_btn">Review</button></a>                   </div>
                  <div className="like_wrapper">
                      <img src={fries} alt="fries" className="MostLikedImg" />
                      <span style={{fontSize:"25px"}}>4) Fries</span>
                      <a href=""><button className="review_btn">Review</button></a>                   </div>
                  <div className="like_wrapper">
                      <img src={Bao} alt="Bao" className="MostLikedImg" />
                      <span style={{fontSize:"25px"}}>5) Bao</span>
                      <a href=""><button className="review_btn">Review</button></a>                   </div>
              </div>

          </div>
      );
    
};