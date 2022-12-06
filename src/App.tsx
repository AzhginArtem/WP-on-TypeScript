import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Lobby from "./pages/Lobby";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="lobby" element={<Lobby />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
