import "./styles/leaflet.css";

import MapWidget from "./components/MapWidget";
import AddressList from "./components/AddressList";
import { useEffect, useState } from "react";
import { PageHeader, Spin } from "antd";
import { useTransition, animated } from "react-spring";
import { Footer, Header } from "antd/lib/layout/layout";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const transition = useTransition(mounted, {
    from: { opacity: 1, x: -1000 },
    enter: { opacity: 1, x: 0 },
    leave: {},
    config: { duration: 500 },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLoading = () => {
    setIsLoading(false);
    console.log("finished loading");
  };

  useEffect(() => {
    const b = setTimeout(handleLoading, 300);
    return () => clearTimeout(b);
  }, []);

  return (
    <>
      <div className="">
        {isLoading === false ? (
          <div className="grid grid-cols-7 backdrop-blur-md">
            {transition((style, item) =>
              item ? (
                <animated.div
                  style={style}
                  className="left lg:col-span-2 col-span-2 z-10 min-w-[30%] bg-white shadow-inner "
                >
                  <AddressList />
                </animated.div>
              ) : null
            )}

            <MapWidget />
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen backdrop-blur-md ">
            <Spin size="large" tip="Loading..." />
          </div>
        )}
        <div className="absolute bottom-0 w-screen backdrop-blur-xl bg-gray-800/30 font-italic gap-1 flex justify-center text-gray-400">
          Developed by{" "}
          <a
            href="mailto: gabrieldsfs@gmail.com"
            className="underline text-slate-400 hover:text-slate-100 hover:underline"
          >
            Gabriel DSFS
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
