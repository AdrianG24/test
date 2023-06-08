import React from 'react'
import Feature from '../../components/feature/Feature';
import './features.css'

const featuresData = [
  {
    title: 'Instant Access, Anytime, Anywhere',
    text: "Spinach Casino is accessible across various devices, allowing you to enjoy your favorite slot games whenever and wherever you want. Whether you\u0027re at home, on the go, or simply seeking a quick escape, our casino is always at your fingertips. Experience uninterrupted excitement whenever the mood strikes!",
  },
  {
    title: 'Enhanced Winning Opportunities',
    text: "We believe in maximizing your winning potential. That\u0027s why our games are designed to deliver not only thrilling entertainment but also generous payouts. Take advantage of features like multipliers, free spins, and exciting bonus rounds to boost your chances of hitting it big. The next jackpot could be just a spin away!",
  },
  {
    title: 'Safe and Secure Gaming Environment',
    text: 'Your safety and security are our top priorities. Spinach Casino employs advanced encryption and robust security measures to ensure that your personal information and transactions are fully protected. Enjoy peace of mind as you immerse yourself in an environment built on trust and integrity.',
  },
  {
    title: 'Endless Variety and New Experiences',
    text: 'At Spinach, we believe in constantly keeping things fresh and exciting. We regularly update our game library with new and thrilling slot titles, ensuring that you always have something new to explore. With our commitment to variety, you\u0027ll never run out of options and will always find new experiences waiting for you. Get ready to discover the latest and most innovative slot games in the industry at Spinach!',
  },
];

const Features = () => {
  return (
    <div className='spinach__features section__padding' id="features">
      <div className='spinach__features-heading'>
        <h1 className='gradient__text'>The Spinach Advantage</h1>
          <p>When you choose Spinach Casino, you unlock a world of benefits and advantages designed to enhance your gaming experience:</p>
      </div>
      <div className='spinach__features-container'>
          {featuresData.map((item, index) => (
            <Feature  title={item.title} text={item.text} key={item.title + index}/>
          ))}
      </div>
    </div>
  )
}

export default Features

