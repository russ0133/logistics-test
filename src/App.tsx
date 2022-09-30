import { Button, Collapse } from "antd";
import "./App.css";
import MapWidget from "./components/MapWidget";
import { useState } from "react";
import { PageHeader } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import AddressList from "./components/AddressList";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from "./redux/slices/counterSlice";

const { Panel } = Collapse;
interface PanelProps {
  id: number;
  setPoints: React.Dispatch<React.SetStateAction<number | undefined>>;
}

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [points, setPoints] = useState<number | undefined>(undefined);

  return (
    <div className="h-screen">
      {count}
      <Button onClick={() => dispatch(increment())}>Add Count</Button>
      <PageHeader className="site-page-header bg-gradient-to-r from-cyan-500 to-blue-500 " title="Logistics" />
      <div className="MAIN-CONTAINER flex justify-between gap-6 h-full">
        <div className="w-1/3 min-w-max shadow-lg">
          <AddressList id={points} setPoints={setPoints} />
        </div>
        <div className="p-6 h-5/6 w-screen">
          <MapWidget points={points} setPoints={setPoints} />
        </div>
      </div>
    </div>
  );
}

export default App;
