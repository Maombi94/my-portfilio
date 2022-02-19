import React from "react";
import "./Brand.css";

import { laravel, slack, dropbox, shopify } from "./imports";

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={laravel} width={150}/>
    </div>
    <div>
      <img src={slack} />
    </div>
   
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div>
  </div>
);

export default Brand;
