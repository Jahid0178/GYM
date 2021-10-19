import React from "react";
import Banner from "../../components/Banner/Banner";
import Benefits from "../../components/Benefits/Benefits";
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
    </div>
  );
};

export default Home;
