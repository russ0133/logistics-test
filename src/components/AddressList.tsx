import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectedRoute, set } from "../redux/slices/routeSlice";

import { ClearOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Divider, List, Tooltip } from "antd";

import { GetAllAddressDestinations, GetAllAddressDestinationsFormatted } from "../api/Address";
interface Props {
  id: number | undefined;
}

const ActionButton: React.FC<Props> = ({ id }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const smallScreen = 1280;

  const dispatch = useDispatch();
  const onResize = () => {
    setWindowWidth(window.innerWidth);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <Tooltip placement={"right"} title="shows the route to this destination">
        <Button
          onClick={() => {
            dispatch(set(id));
          }}
          shape={"round"}
          type="primary"
          icon={<SearchOutlined />}
        >
          {windowWidth >= smallScreen && <>select</>}
        </Button>
      </Tooltip>
    </>
  );
};

const AddressList: React.FC = () => {
  const route = useSelector(selectedRoute);
  const dispatch = useDispatch();

  const destinations = GetAllAddressDestinations();

  const listItemStyleSelected = "transition ease-in-out bg-blue-100 font-bold cursor-default";
  const listItemStyle = "cursor-default";

  return (
    <>
      <Divider orientation="left">Your Route</Divider>
      <div className="hover:cursor-">
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
              renderItem={(item, i) => (
                <List.Item
                  className={route == i ? listItemStyleSelected : listItemStyle}
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
    </>
  );
};

export default AddressList;
