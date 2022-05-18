import React from "react";
export default function SignUpSmall()  { 
        return (
            <div className='signup_container' style={{flexDirection:"column",textAlign:"center",width:"30%"}}>
                      <div className='purple_box'>
                           <h3 className='sign_box'>Don't forget to sign up <br/> to our page to get <br/>notifications</h3>
                         <div className='user_form' style={{flexDirection:"column"}}>
                             <input type="text" name="name" style={{width: "75%"}} className='signup_input' placeholder='Enter Your Name'/>
                             <input type="text" name="name" style={{width: "75%"}} className='signup_input'  placeholder='Enter Your Email'/>
                              <button style={{width: "50%"}}>Subscribe</button>
                        
                         </div>
                        
                      </div>

                    </div>
        );
    };