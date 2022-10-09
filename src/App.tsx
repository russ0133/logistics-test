import "./styles/leaflet.css";

import MapWidget from "./components/MapWidget";
import AddressList from "./components/AddressList";

function App() {
  return (
    <div className="h-screen bg-[url('../assets/backdrop.jpg')] bg-cover bg-center">
      <div className="grid grid-cols-7 backdrop-blur-md">
        <div className="left lg:col-span-2 col-span-2 z-10 min-w-[30%] bg-white shadow-inner ">
          <AddressList />
        </div>
        <MapWidget />
      </div>
    </div>
  );
}

export default App;
