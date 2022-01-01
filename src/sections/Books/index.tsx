import React, { useEffect, useState } from "react";
import { Table, Input } from "antd";
import { Api } from "@api";
import { useQuery } from "react-query";
import { Book } from "@core";
const { Column } = Table;
const { Search } = Input;

export const Books = () => {
  const { data, isLoading } = useQuery(
    ["getBooks"],
    () => Api.get<Book[]>(`book/?page=0&size=0`).then((res) => res.data),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  const [books, setBooks] = useState<Book[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (data) {
      setBooks(data);
    }
  }, [data]);
  console.log("BOOKS:", data);

  //on search function
  function onSearchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
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
        dataSource={books.filter((b) => b?.name?.includes(searchText))}
        rowKey={(data) => data._id}
        loading={isLoading}
        pagination={{
          pageSize: 10,
          total: books?.length,
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
