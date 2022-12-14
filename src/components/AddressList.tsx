import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectedRoute, set } from "../redux/slices/routeSlice";

import { ClearOutlined, RadarChartOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, List, Tooltip } from "antd";

import API from "../api/destinations";

import useWindowSize from "../hooks/useWindowSize";
import { useTransition, animated } from "react-spring";
const smallScreen = 1280;
interface Props {
  id: number | undefined;
}

const ActionButton: React.FC<Props> = ({ id }) => {
  const [, width] = useWindowSize();
  const dispatch = useDispatch();

  return (
    <>
      <Tooltip placement={"right"} title="shows the route to this destination">
        <Button
          onClick={() => {
            dispatch(set(id));
          }}
          shape={"round"}
          className={"bg-red-500"}
          style={{ background: "rgb(100 116 139)", borderColor: "rgb(100 116 139)" }}
          type="primary"
          icon={<SearchOutlined />}
        >
          {width >= smallScreen && <>select</>}
        </Button>
      </Tooltip>
    </>
  );
};

const AddressList: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const transition = useTransition(mounted, {
    from: { opacity: 0, y: +20 },
    enter: { y: 0, opacity: 1 },
    leave: {},
    config: { duration: 500 },
  });

  useEffect(() => {
    setTimeout(() => setMounted(true), 200);
  }, []);
  const route = useSelector(selectedRoute);
  const dispatch = useDispatch();

  const destinations = API.getAllDestinations();

  const listItemStyleSelected =
    "transition ease-in-out bg-blue-200 font-bold cursor-default duration-500";
  const listItemStyle = "cursor-default";

  return (
    <>
      {transition((style, item) =>
        item ? (
          <animated.div style={style} className="blur-none">
            <Divider orientation="left" className="">
              <RadarChartOutlined className="px-2 animate-pulse" />
              Your Routes
            </Divider>
            <div className="hover:cursor">
              <div>
                <div>
                  <List
                    bordered
                    dataSource={destinations}
                    footer={
                      <Button
                        danger
                        shape={"round"}
                        icon={<ClearOutlined />}
                        size={"small"}
                        onClick={() => dispatch(set(undefined))}
                      >
                        clear
                      </Button>
                    }
                    renderItem={(item: any, i) => (
                      <List.Item
                        className={route === i ? listItemStyleSelected : listItemStyle}
                        key={i}
                        actions={[<ActionButton id={i} />]}
                      >
                        {item}
                      </List.Item>
                    )}
                  />
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default AddressList;
