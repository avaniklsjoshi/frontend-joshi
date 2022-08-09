import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./create";
import Edit from "./edit";
import Navbar from "./navbar";
import RecordList from "./recordList";

export default function CrudeBackend() {
  return (
    <div className="crud">
      Loading...
      <Navbar />
      <RecordList />
    </div>
  );
}
