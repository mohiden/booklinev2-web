import React from "react";
import { Button, Input } from "antd";
const { Search } = Input;

interface Props {
  callback: () => void;
  btnText: string;
}

export const TableTopArea: React.FC<Props> = ({ callback, btnText }) => {
  return (
    <div className="search-input">
      <Search
        style={{ width: "20rem" }}
        size="large"
        placeholder="Search"
        allowClear
        onChange={() => {}}
      />
      <Button size="large" type="primary" onClick={callback}>
        {btnText}
      </Button>
    </div>
  );
};
