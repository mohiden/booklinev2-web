import React, { useState } from "react";
import { Pagination, Table, Tag, Input } from "antd";
import { CustomModal } from "@components";
import { Api, Order } from "@lib";
import { notify } from "@utils";
import { useQuery } from "react-query";
import { Book } from "@core";
const { Column } = Table;
const { Search } = Input;

export const Books = () => {
  const { data, isLoading } = useQuery("all-books", () =>
    Api.get<Book[]>("book/?page=0&size=0").then((res) => res.data)
  );
  console.log("BOOKS:", data);

  //on search function
  function onSearchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);
  }

  return (
    <>
      <div className="search-input">
        <Search
          style={{ marginLeft: "auto", width: "20rem" }}
          size="large"
          placeholder="Search"
          allowClear
          onChange={onSearchHandler}
        />
      </div>
      <Table
        dataSource={data}
        rowKey={(data) => data._id}
        loading={isLoading}
        pagination={{
          pageSize: 10,

          total: data?.length,
        }}
      >
        <Column title="ID" dataIndex="_id" key="_id" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Author" dataIndex="author" key="author" />
        <Column title="Language" dataIndex="language" key="language" />
      </Table>
    </>
  );
};
