import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";
import Hero from "../../assets/Group 74.svg";

const Features = () => (
  <div className="marketplace section__padding" id="features">
    <div className="image_hero">
      <img src={Hero} />
    </div>
    <div className="info_marketplace_page">
      <h1>Music NFT Marketplace</h1>
      <p>
        Create your first music NFTs with NFT market for musicians. Create music
        and music videos just under the $1, the platform works with BSC
        blockchain and supports mp4. With AirNFTs, you are getting the control
        over your NFTs, no middle man cutting your sales. Create, Buy, Sell and
        Earn with your music NFTs.
      </p>
      <button type="button">Explore Marketplace</button>
    </div>
  </div>
);

export default Features;
