import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import HouseCard from "../HouseCard";
import { Container } from "./style";

const { REACT_APP_BASE_URL: url } = process.env;

const Property = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data));
  }, [search]);
  return (
    <Container>
      {data?.map((value, index) => {
        return <HouseCard data={value} key={index} />;
      })}
    </Container>
  );
};

export default Property;
