import React from "react";
import { Container, Card, Image, Icon } from "semantic-ui-react";

const MainPage: React.FC = () => {
  return (
    <Container style={{ marginTop: "4rem" }}>
      <Card>
        <Image src="/picture.jpg" wrapped ui={false} />
        <Card.Content>
          <Card.Header>下林拓躍</Card.Header>
          <Card.Meta>
            <span className="date">Joined in 2018 December</span>
          </Card.Meta>
          <Card.Description>Programmer.</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
          </a>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default MainPage;
