import React, { Fragment } from "react";
import "./App.css";
import { Segment, Menu } from "semantic-ui-react";
import NavBar from "./layouts/NavBar";
import MainPage from "./layouts/MainPage";
import { Switch, Route, Router, Link } from "react-router-dom";
import AdminLogin from "./layouts/admin/AdminLogin";
import Admin from "./layouts/admin/Admin";

const App: React.FC = () => {
  return (
    <Segment className={"App"}>
      <NavBar />
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/adminlogin" component={AdminLogin}></Route>
        <Route exact path="/admin" component={Admin}></Route>
      </Switch>
    </Segment>
  );
};

export default App;
