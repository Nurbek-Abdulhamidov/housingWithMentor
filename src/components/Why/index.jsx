import React from "react";
import { Container, Content, Icons, Wrapper } from "./style";

const Why = () => {
  return (
    <Container>
      <Content>
        <h1 className="title">Why Choose Us?</h1>
        <p className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.{" "}
        </p>
      </Content>
      <Wrapper>
        <Content>
          <Icons.Email />
          <div className="subTitle">Trusted By Thousands</div>{" "}
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icons.House />
          <div className="subTitle">Wide Renge Of Properties</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icons.Calculator />
          <div className="subTitle">Financing Made Easy</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
        <Content>
          <Icons.Maps />
          <div className="subTitle">See Neighborhoods</div>
          <div className="info">
            With over 1 million+ homes for sale available on the website, Trulia
            can match you with a house you will want to call home.
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Why;
