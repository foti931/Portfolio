import React from "react";
import { Item, Grid, Menu, Segment } from "semantic-ui-react";

const Admin: React.FC = () => {
  return (
    <Grid>
      <Grid.Column width={4}>
        <Menu fluid vertical tabular>
          <Menu.Item name="スキル一覧" onClick={() => {}} />
          <Menu.Item name="経歴一覧" onClick={() => {}} />
          <Menu.Item name="PDF出力" onClick={() => {}} />
          <Menu.Item name="CSV出力" onClick={() => {}} />
          <Menu.Item name="管理者情報" onClick={() => {}} />
        </Menu>
      </Grid.Column>
      <Grid.Column stretched width={12}>
        <Segment>
          This is an stretched grid column. This segment will always match the
          tab height
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Admin;
