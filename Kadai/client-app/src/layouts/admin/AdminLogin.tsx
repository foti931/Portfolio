import React from "react";
import { Segment, Container, Form, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const AdminLogin: React.FC = () => {
  return (
    <Container style={{ marginTop: "4rem" }}>
      <h1>管理者ログイン</h1>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder="Last Name" />
        </Form.Field>
        <Form.Field></Form.Field>
        <Button as={Link} to="/admin" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default AdminLogin;
