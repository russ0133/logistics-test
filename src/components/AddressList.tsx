import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectedRoute, set } from "../redux/slices/routeSlice";

import { ClearOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Divider, List, Tooltip } from "antd";

import { GetAllAddressDestinations } from "../api/Address";
import useWindowSize from "../hooks/useWindowSize";
const smallScreen = 1280;
interface Props {
  id: number | undefined;
}

const ActionButton: React.FC<Props> = ({ id }) => {
  const [height, width] = useWindowSize();
  const dispatch = useDispatch();

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
          {width >= smallScreen && <>select</>}
        </Button>
      </Tooltip>
    </>
  );
};

const AddressList: React.FC = () => {
  const route = useSelector(selectedRoute);
  const dispatch = useDispatch();

  const destinations = GetAllAddressDestinations();

  const listItemStyleSelected =
    "transition ease-in-out bg-blue-200 font-bold cursor-default duration-500";
  const listItemStyle = "cursor-default";

  return (
    <>
      <Divider orientation="left" className="">
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
