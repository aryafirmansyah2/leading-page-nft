import React from "react";
import './header.css'
import People from "../../assets/people.png";
import Ai from "../../assets/image 5.svg";
import Ornamen from '../../assets/Group 47.svg'
import Solana from '../../assets/logo-black 1.svg'

const Header = () => {
  return (
    <div className="gpt3__header" id="home">
     
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
        Music for NFT creators.
        </h1>
        <h1 className="gradient__text">Digital Music for fans.</h1>
        <p>
        Music NFTs will continue to revolutionize the way that artists and fans create 
        community together as we enter the upcoming year — undoubtedly 
        changing the trajectory of countless budding music careers. 
        </p>
        {/* <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={People} />
          <p>1.600 people requested to access a visit in last 24 hours</p>
        </div> */}
        <div className="header_click">
          <div className="header_click_logo">
            <p>Powered by</p>
            <img src={Solana}/>
          </div>
          <button type="button">Discover More</button>
        </div>
      </div>
      
      <div className="gpt3__header-image">
          <img src={Ai} />
        </div> 
        <div className="ornamen">
        <img src={Ornamen}/>
      </div>  
    </div>
  );
};

export default Header;
