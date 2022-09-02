import React from "react";
import { Button, DatePicker, Space } from "antd";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Space>
        <DatePicker />
        <Button type="dashed">Primary Button</Button>
      </Space>
    </>
  );
};

export default Dashboard;
