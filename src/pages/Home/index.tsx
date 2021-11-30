import { AddOrder, ListOrders, Dashboard, NotFound } from "@components";
import { Sidebar, Header } from "@layout";
import React from "react";
import { Navigate, Route, Routes } from "react-router";

export const Home = () => {
  return (
    <div className="dashboard-analytics">
      <div>
        {/* BEGIN LOADER */}
        {/* <div id="load_screen"> <div className="loader"> <div className="loader-content">
          <div className="spinner-grow align-self-center" />
        </div></div></div> */}
        {/*  END LOADER */}

        {/*  BEGIN NAVBAR  */}
        <Header />
        {/*  END NAVBAR  */}

        {/*  BEGIN MAIN CONTAINER  */}
        <div className="main-container" id="container">
          <div className="overlay" />
          <div className="search-overlay" />
          {/*  BEGIN SIDEBAR  */}
          <Sidebar />
          {/*  END SIDEBAR  */}

          {/*  BEGIN CONTENT AREA  */}
          <Routes>
            <Route path="/*" element={<Navigate to="/*" />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/order/all" element={<ListOrders />} />
            <Route path="/order/new" element={<AddOrder />} />
          </Routes>
          {/*  END CONTENT AREA  */}
        </div>
        {/* END MAIN CONTAINER */}
      </div>
    </div>
  );
};
