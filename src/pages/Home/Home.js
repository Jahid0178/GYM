import React from "react";
import Banner from "../../components/Banner/Banner";
import Benefits from "../../components/Benefits/Benefits";
import BmiChart from "../../components/BmiChart/BmiChart";
import Pricing from "../../components/Pricing/Pricing";
import WhatIOffer from "../../components/WhatIOffer/WhatIOffer";

import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <WhatIOffer></WhatIOffer>
      <Benefits></Benefits>
      <Pricing></Pricing>
      <BmiChart></BmiChart>
    </div>
  );
};

export default Home;
