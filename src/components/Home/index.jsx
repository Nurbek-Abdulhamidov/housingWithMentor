import React from "react";
import Carousel from "../Carousel";
import Category from "../Category";
import HouseCard from "../HouseCard";

const Home = () => {
  return (
    <div>
      <Carousel />
      <HouseCard />
      <Category />
    </div>
  );
};

export default Home;
