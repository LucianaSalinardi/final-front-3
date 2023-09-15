import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Favs from "./Favs";
import Detail from "./Detail";
import Layout from "../Components/Layout";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="dentist/:id" element={<Detail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="favs" element={<Favs />} />
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
