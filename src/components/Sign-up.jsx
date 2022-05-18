import React from 'react';
import { render } from '@testing-library/react';



      
         export default function signUp() {
                return(
                  
                    <div className='signup_container'>
                      <div className='purple_box'>
                         <h3 className='sign_box'>Sign up to our page to get notifications</h3>
                         {/* <textarea>Your Name</textarea> */}
                         {/* <label for="name">Name</label> */}
                         <div className='user_form'>
                         <input type="text" name="name" className='signup_input' placeholder='Enter Your Name'/>
                         <input type="text" name="name" className='signup_input'  placeholder='Enter Your Email'/>
                         <button>Subscribe</button>
                         </div>
                        
                      </div>

                    </div>
                  
                )
                }
 

