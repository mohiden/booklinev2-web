import React from "react";
import { Col, Row, Statistic } from "antd";

export const Dashboard = () => {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic title="Pending" value={112893} />
      </Col>
      <Col span={12}>
        <Statistic title="delivered" value={112893} />
      </Col>
    </Row>
  );
};
