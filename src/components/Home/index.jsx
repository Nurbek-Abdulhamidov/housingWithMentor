import React from "react";
import Carousel from "../Carousel";
import CategoryCard from "../CategoryCard";
import HouseCard from "../HouseCard";

const Home = () => {
  return (
    <div>
      <Carousel />
      <HouseCard />
      <CategoryCard/>
    </div>
  );
};

export default Home;
