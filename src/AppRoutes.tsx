import React from "react";
import { Route, Router, Routes } from "react-router";
import { App, Login, Notfound } from "@pages";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/app/*" element={<App />} />
      <Route path="/*" element={<Notfound />} />
    </Routes>
  );
};
