import { Carousel } from "antd";
import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import img1 from "../../assets/imgs/uy1.png";
import img2 from "../../assets/imgs/uy2.png";


const GenCarousel = () => {
  const slider = useRef();
  const onChange = (currentSlide) => {
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "left") {
      slider.current.prev();
    }
    if (name === "right") {
      slider.current.next();
    }
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Description>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Description>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow data-name="left" left="true" onClick={onMove} />
      <Arrow data-name="right" onClick={onMove} />
    </Container>
  );
};

export default GenCarousel;
