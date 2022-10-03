import React from "react";
import { Blur, Container, Content, Img } from "./style";
import noImg from "../../assets/imgs/no-image.jpg";
import categoryImg from "../../assets/imgs/home.jpg";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={categoryImg || noImg} />
      <Blur />
      <Content>{name || "Category name"}</Content>
    </Container>
  );
};

export default CategoryCard;
