import React from "react";
import Banner from "../Banner";
import Carousel from "../Carousel";
import Category from "../Category";
import Recent from "../Recent";
import Recommended from "../Recommended";
import Why from "../Why";

const Home = () => {
  return (
    <div>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </div>
  );
};

export default Home;
