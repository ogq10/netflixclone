import React from "react";
import {Jumbotron} from "../components";
import jumboData from "../fixtures/jumbo";

export default function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Left>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
          </Jumbotron.Left>
          <Jumbotron.Right>
            <Jumbotron.Image src={item.image} alt={item.alt} />
          </Jumbotron.Right>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
