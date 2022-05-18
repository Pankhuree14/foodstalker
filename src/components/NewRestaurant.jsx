import React from 'react';
import pic from './Image/pic1.jpeg';
import pic2 from './Image/pic2.jpeg'
import pic3 from './Image/pic3.jpeg'


export default function NewRestaurant() {
      
        return (
            <div>
                <h1 className='restaurantHead'>Find New Restaurant/Cafes</h1>
                <div>
                    <img src={pic} alt='img' className='restaurantImage' />
                    <img src={pic2} alt='img' className='restaurantImage' />
                    <img src={pic3} alt='img' className='restaurantImage' />
                </div>

            </div>
        )
    
}
 
