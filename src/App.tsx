import "./App.css";

import { PageHeader } from "antd";

import MapWidget from "./components/MapWidget";
import AddressList from "./components/AddressList";

function App() {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-6 ">
        <div className="md:col-span-2 col-span-2">
          <AddressList />
        </div>
        <div className="md:col-span-4 col-span-4 z-10">
          <MapWidget />
        </div>
      </div>
    </div>
  );
}

export default App;
