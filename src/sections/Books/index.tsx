import React, { useState } from "react";
import { Table } from "antd";
import { queries } from "@api";
import { useQuery } from "react-query";
import { IBook } from "@core";
import { paginatedOptions } from "@utils";
import { TableTopArea } from "@components";
const { Column } = Table;

export const Books = () => {
  const {
    book: { getBooks },
  } = queries;
  const [searchText, setSearchText] = useState<string>("");
  const url = paginatedOptions<IBook>("book", [], 0, 0, searchText);
  const { data, isLoading } = useQuery(
    [getBooks.queryName, searchText],
    () => getBooks.queryFn(url),
    {
      refetchOnWindowFocus: false,
    }
  );

  //on search function
  function onSearchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <>
      <TableTopArea
        btnText="Create book"
        onSearch={onSearchHandler}
        callback={() => {}}
      />
      <Table
        dataSource={data}
        rowKey={(data) => data._id}
        loading={isLoading}
        pagination={{
          pageSize: 10,
          total: data?.length,
        }}
      >
        {/* <Column title="ID" dataIndex="_id" key="_id" /> */}
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Author" dataIndex="author" key="author" />
        <Column title="Language" dataIndex="language" key="language" />
      </Table>
    </>
  );
};
