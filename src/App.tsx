import "./App.css";

import { Card, PageHeader } from "antd";

import MapWidget from "./components/MapWidget";
import AddressList from "./components/AddressList";

function App() {
  return (
    <div className="h-screen">
      <PageHeader className="site-page-header bg-gradient-to-r from-cyan-500 to-blue-500 " title={"Logistics"} />
      <div className="MAIN-CONTAINER flex justify-between gap-6 h-full">
        <div className="w-1/3 min-w-[33%] shadow-lg">
          <AddressList />
        </div>
        <div className="p-6 h-5/6 min-w-[50%] w-screen">
          <MapWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
