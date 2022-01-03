import React, { useEffect, useState } from "react";
import { Table, Input, Button } from "antd";
import { Api, queries } from "@api";
import { useQuery } from "react-query";
import { IShipment } from "@core";
import { paginatedOptions } from "@utils";
import { RenderExtendedTable } from "@components";
const { Column } = Table;
const { Search } = Input;

export const Shipments = () => {
  const {
    shipment: { getShipments },
  } = queries;
  const url = paginatedOptions<IShipment>("shipment", [], 0, 0);
  const { data, isLoading, error } = useQuery(
    getShipments.queryName,
    () => getShipments.queryFn(url),
    {
      retry: false,
      refetchOnWindowFocus: false,
    }
  );
  const [shipments, setShipments] = useState<IShipment[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    if (data) {
      setShipments(data);
    }
  }, [data]);
  console.log("shipments:", data);

  //on search function
  function onSearchHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchText(e.target.value);
  }

  return (
    <>
      <div className="search-input">
        <Search
          style={{ marginRight: "auto", width: "20rem" }}
          size="large"
          placeholder="Search"
          allowClear
          onChange={onSearchHandler}
        />
        <Button size="large" type="primary">
          Create Shipment
        </Button>
      </div>
      <Table
        dataSource={shipments.filter((b) =>
          b.createdBy?.username?.includes(searchText)
        )}
        rowKey={(data) => data._id}
        expandable={{
          expandedRowRender: (row) => {
            return <RenderExtendedTable id={row._id} />;
          },
        }}
        showHeader
        bordered
        loading={isLoading}
        pagination={{
          pageSize: 10,
          total: shipments?.length,
        }}
      >
        <Column title="ID" dataIndex="_id" key="_id" />
        <Column title="Month" dataIndex="month" key="month" />
        <Column title="Year" dataIndex="year" key="year" />
        <Column
          title="created by"
          dataIndex="createdBy"
          key="createdBy"
          render={(field: IShipment["createdBy"]) => (
            <span>{field.username}</span>
          )}
        />
        <Column
          title="Actions"
          render={() => {
            return <Button type="ghost">Explore</Button>;
          }}
        />
      </Table>
    </>
  );
};
