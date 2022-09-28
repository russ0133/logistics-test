import { Button, Collapse, Space, Table, Tag } from "antd";
import "./App.css";
import MapWidget from "./components/MapWidget";
import type { ColumnsType } from "antd/es/table";

const { Panel } = Collapse;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

function App() {
  const PanelContent = () => {
    return (
      <div className="flex gap-5 -my-2">
        <Button type="primary" size={"small"}>
          Get Route
        </Button>
        <Button type="primary" size={"small"} danger>
          Remove
        </Button>
      </div>
    );
  };
  return (
    <div className="MAIN-CONTAINER flex justify-between h-screen gap-6">
      <div className="h-screen  w-1/5">
        <Collapse accordion>
          <Panel header="Address 1" key="1">
            <PanelContent />
          </Panel>
          <Panel header="Address 2" key="2">
            <PanelContent />
          </Panel>
        </Collapse>
      </div>
      <div className="MAIN-CONTAINER flex justify-between items-center p-6 h-screen gap-6">
        <MapWidget />
      </div>
    </div>
  );
}

export default App;
