import React, { useEffect, useState } from "react";
import { Table, Input, Button } from "antd";
import { queries } from "@api";
import { useQuery } from "react-query";
import { IBook } from "@core";
import { paginatedOptions } from "@utils";
const { Column } = Table;
const { Search } = Input;

export const Books = () => {
  const {
    book: { getBooks },
  } = queries;
  const url = paginatedOptions<IBook>("book", [], 0, 0);
  const { data, isLoading } = useQuery(
    getBooks.queryName,
    () => getBooks.queryFn(url),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  const [books, setBooks] = useState<IBook[]>([]);
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
          style={{ width: "20rem" }}
          size="large"
          placeholder="Search"
          allowClear
          onChange={onSearchHandler}
        />
        <Button size="large" type="primary">
          Create
        </Button>
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
