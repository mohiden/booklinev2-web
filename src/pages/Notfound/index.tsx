import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router";

export const Notfound = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>This page doesn't exist</h1>
      <Button type="primary" onClick={() => navigate("/app/")}>
        Go Home
      </Button>
    </>
  );
};
