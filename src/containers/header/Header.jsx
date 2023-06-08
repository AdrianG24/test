import React from 'react'
import './header.css'
import people from '../../assets/people.png';
import slot from '../../assets/slot.jpg';

const Header = () => (
  <div className="spinach__header section__padding" id="home">
    <div className="spinach__header-content">
      <h1 className="gradient__text"> Spinach Casino – Modern Gaming & Thrilling Slot Adventures!</h1>
      <p>Unlock the excitement at Spinach, the ultimate online slot casino designed to deliver an unparalleled gaming experience. Our modern platform combines cutting-edge technology with captivating slot adventures that will keep you on the edge of your seat. Get ready to embark on a journey filled with big wins, endless entertainment, and a world of possibilities!</p>

      <div className="spinach__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="spinach__header-content__people">
        <img src={people} alt='people'/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="spinach__header-image">
      <img src={slot} alt='slot' />
    </div>
  </div>
);

export default Header

