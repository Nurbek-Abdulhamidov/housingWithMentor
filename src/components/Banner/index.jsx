import { Blur, Container, Content, Img } from "./style";
import img1 from "../../assets/imgs/uy1.png";
import Button from "../../components/Generic/Button";

const Banner = () => {
  return (
    <Container>
      <Img src={img1} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </Content.Title>
        <Button>Read more</Button>
      </Content>
    </Container>
  );
};

export default Banner;
