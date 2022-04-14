import React from "react";
import { dropbox, google, atlassian, shopify, slack } from "./index";
import "./brand.css";

const brand = () => {
  return (
    <div className="gpt3__brand-logo">
      <div>
        <img src={dropbox}/> 
      </div>
      <div>
        <img src={google}/> 
      </div>
      <div>
        <img src={atlassian}/> 
      </div>
      <div>
        <img src={shopify}/> 
      </div>
      <div>
        <img src={slack}/> 
      </div>
    </div>
  )
};

export default brand;
