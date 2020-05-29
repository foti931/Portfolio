import React from "react";
import { Menu } from "semantic-ui-react";
import { Link, Router, Route } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <Menu fixed="top">
      <Menu.Item header>
        <Link to="/">ホーム</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/adminlogin">管理者ログイン</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/">ログアウト</Link>
      </Menu.Item>
    </Menu>
  );
};

export default NavBar;
