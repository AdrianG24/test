import React from 'react'
import Feature from '../../components/feature/Feature'
import './about.css'

const About = () => {
  return (
  <div className="spinach__about section__margin" id="wspinach">
    <div className="spinach__about-feature">
      <Feature title="What Sets Spinach Casino Apart" text="At Spinach Casino, we redefine online slot gaming with our unique blend of modern sophistication and captivating gameplay." />
    </div>
    <div className="spinach__about-heading">
      <h1 className="gradient__text">Here's what makes us stand out from the crowd:</h1>
      <p>Explore the Library</p>
    </div>
    <div className="spinach__about-container">
      <Feature title="Unleash the Power of Modern Gaming" text="Our state-of-the-art platform leverages the latest technology to deliver an immersive gaming experience. Stunning graphics, seamless gameplay, and mesmerizing sound effects ensure that every spin is a feast for the senses. Prepare to be amazed by the sheer quality of our games!" />
      <Feature title="Diverse Selection of Slot Games" text="Discover a vast collection of slot games carefully curated to cater to all tastes. From classic favorites that evoke nostalgia to cutting-edge releases that push the boundaries of innovation, we have something for everyone. Brace yourself for thrilling adventures, captivating storylines, and lucrative bonus features that will keep you on the edge of your seat." />
      <Feature title="Worldwide Excitement" text="While we initially cater to players in Europe, our vision extends far beyond borders. We aim to create a global community of slot enthusiasts, where players from all corners of the globe come together to experience the joy of spinning the reels. Get ready to connect with fellow players worldwide and share in the excitement!" />
    </div>
  </div>
  )
}

export default About

