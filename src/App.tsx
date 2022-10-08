import "./App.css";

import MapWidget from "./components/MapWidget";
import AddressList from "./components/AddressList";
import { useTransition, animated } from "react-spring";
import { useState } from "react";

function App() {
  return (
    <div className="h-screen bg-gradient-to-l from-slate-500 to-slate-700">
      <div className="grid grid-cols-7 ">
        <div className="left md:col-span-2 col-span-2 z-10 min-w-[30%] bg-white shadow-inner">
          <AddressList />
        </div>
        <MapWidget />
      </div>
    </div>
  );
}

export default App;
