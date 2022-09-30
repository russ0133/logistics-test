import { SearchOutlined } from "@ant-design/icons";
import { Button, Divider, List, Tooltip, Typography } from "antd";
import React, { useEffect, useState } from "react";

const data = ["1133 Atha Drive", "622 Brighton Circle Road"];

interface Props {
  id: number | undefined;
  setPoints: React.Dispatch<React.SetStateAction<number | undefined>>;
}
const ActionButton: React.FC = ({}) => {
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
        <Tooltip title="shows the route to this destination">
          <Button onClick={() => {}} shape={"round"} type="primary" size={"small"} icon={<SearchOutlined />} />
        </Tooltip>
      )}
      {windowWidth >= 768 && (
        <Tooltip title="shows the route to this destination">
          <Button
            onClick={(e) => {
              console.log(e);
            }}
            shape={"round"}
            type="primary"
            size={"small"}
            icon={<SearchOutlined />}
          >
            Select
          </Button>
        </Tooltip>
      )}
    </>
  );
};

const AddressList: React.FC<Props> = ({ id, setPoints }) => {
  return (
    <>
      <Divider orientation="left">Addresses</Divider>
      <div className="hover:cursor-">
        <List
          bordered
          dataSource={data}
          renderItem={(item, i) => (
            <List.Item key={1} actions={[<ActionButton />]}>
              {item} - {i}
            </List.Item>
          )}
        />
      </div>
    </>
  );
}; /* 
actions={[action]} */
export default AddressList;
