import { Button } from "antd";
import "./App.css";
import MapWidget from "./components/MapWidget";

function App() {
  return (
    <div className="MAIN-CONTAINER flex justify-between items-center p-6">
      <Button type="primary">Button</Button>
      <MapWidget />
    </div>
  );
}

export default App;
