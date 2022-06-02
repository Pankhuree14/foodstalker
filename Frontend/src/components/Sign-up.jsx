import React from 'react';
import { render } from '@testing-library/react';
import { useEffect,useState } from 'react';
import axios from 'axios';

      
         export default function SignUp() {
           const[name,setName]=useState('');
           const[email,setEmail]=useState('');
           const[error,setError]=useState(false);

           const onSubmit=async()=>{
            let req_body={name:name,email:email}
            //let config={header:{'content-type':'application/json'}};
            let response= await axios.post('http://localhost:3001/api/signup',req_body);
            console.log(req_body);

             console.log("name",name);
             console.log("email",email);
             if(name==''|| email=='')
             setError(true)

           }
                return(
                  
                    <div className='signup_container'>
                      <div className='purple_box'>
                         <h3 className='sign_box'>Sign up to our page to get notifications</h3>
                         {/* <textarea>Your Name</textarea> */}
                         {/* <label for="name">Name</label> */}
                         <div className='user_form'>
                         <input type="text" name="name" className='signup_input' placeholder='Enter Your Name' onChange={(e)=>{setName(e.target.value);setError(false)}}/>
                         <input type="text" name="email" className='signup_input'  placeholder='Enter Your Email' onChange={(e)=>{setEmail(e.target.value);setError(false)}}/>
                         <button onClick={onSubmit}>Subscribe</button>
                         <p style={error?{color:'red'}:{display:'none'}}>Please fill in the data</p>
                         </div>
                        
                      </div>

                    </div>
                  
                )
                }
 

