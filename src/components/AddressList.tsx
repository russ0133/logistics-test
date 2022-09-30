import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectedRoute, set } from "../redux/slices/routeSlice";

import { SearchOutlined } from "@ant-design/icons";
import { Button, Divider, List, Tooltip } from "antd";

const data = ["1133 Atha Drive", "622 Brighton Circle Road"];

interface Props {
  id: number | undefined;
}
const ActionButton: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const listener = () => {
    setWindowWidth(window.innerWidth);
    console.log(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <>
      {windowWidth < 768 && (
        <Tooltip placement={"right"} title="shows the route to this destination">
          <Button
            onClick={() => {
              dispatch(set(id));
            }}
            shape={"round"}
            type="primary"
            icon={<SearchOutlined />}
          />
        </Tooltip>
      )}
      {windowWidth >= 768 && (
        <Tooltip placement={"right"} title="shows the route to this destination">
          <Button
            onClick={() => {
              dispatch(set(id));
            }}
            shape={"round"}
            type="primary"
            icon={<SearchOutlined />}
          >
            Select
          </Button>
        </Tooltip>
      )}
    </>
  );
};

const AddressList: React.FC = ({}) => {
  const count = useSelector(selectedRoute);
  const listItemStyleSelected = "transition ease-in-out bg-blue-100 font-bold";
  const listItemStyle = "transition ease-in-out  "; /* 
  const listItemStyle = "transition ease-in-out delay-150 bg-blue-500 hover:bg-indigo-500 duration-300 "; */

  return (
    <>
      <Divider orientation="left">Addresses</Divider>
      <div className="hover:cursor-">
        <div>
          <div>
            <List
              bordered
              dataSource={data}
              renderItem={(item, i) => (
                <List.Item
                  className={count == i ? listItemStyleSelected : listItemStyle}
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
