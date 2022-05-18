import React, { Component } from 'react';
import { render } from '@testing-library/react';
import Foodstalker from './Foodstalker';
import Header from './Header';
import Counter from './Sign-up';
import NewRestaurant from './NewRestaurant';
import Latest from './Latest';
import Profile from './profile';
import Beverages from './Beverage';
import MainCourse from './MainCourse';
import Dessert from './Dessert';
import InstaPage from './instaPage';
import MostLiked from './MostLiked';
import SignUpSmall from './signUpSmall';
import Footer from './footer';

function App(){
 return(
     <div><Header/>
     <Foodstalker/>
     <Counter/>
     <NewRestaurant/>
     <div className='latest_profile'>
          <Latest/>
          <Profile/>
     </div>
    <Beverages/>
    <MainCourse/>
    <Dessert/>
    <div className='latest_profile'>
    <InstaPage/>
    <MostLiked/>
    <SignUpSmall/>
    </div>
    <Footer/>
   </div>
     
 )
}
export default App;
