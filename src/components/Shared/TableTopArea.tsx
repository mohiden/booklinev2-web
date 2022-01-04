import React from "react";
import { Button, Input } from "antd";
const { Search } = Input;

interface Props {
  callback: () => void;
  btnText: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TableTopArea: React.FC<Props> = ({
  callback,
  onSearch,
  btnText,
}) => {
  return (
    <div className="search-input">
      <Search
        style={{ width: "20rem" }}
        size="large"
        placeholder="Search"
        allowClear
        onChange={onSearch}
        // onSearch={onSearch}
      />
      <Button size="large" type="primary" onClick={callback}>
        {btnText}
      </Button>
    </div>
  );
};
