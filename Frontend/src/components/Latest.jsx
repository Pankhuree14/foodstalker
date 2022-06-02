import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Latest1 from "./Image/Latest1.jpeg";
import Latest2 from "./Image/Latest2.jpeg"

function Latest() {
     return (
         <div className='purple_box-small'>
             <h3>Latest Post</h3>
             <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <img src={Latest1} alt="post" className='post_img'/>
                <img src={Latest2} alt="post" className='post_img'/>
             </div>
   
         </div>
        
     );
    
}
 
export default Latest ;