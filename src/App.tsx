import React from "react";
import "./App.css";
import { Table, Tag } from "antd";
import { getData } from "./utils/data";

function App() {
  const data = getData();
  const columns = [
    {
      title: "Employee name",
      key: "employeeName",
      dataIndex: "employeeName",
    },
    {
      title: "Absence type",
      key: "absenceType",
      dataIndex: "absenceType",
    },
    {
      title: "Start date",
      key: "startDate",
      dataIndex: "startDate",
    },
    {
      title: "End date",
      key: "endDate",
      dataIndex: "endDate",
    },
    {
      title: "Approval status",
      key: "approvalStatus",
      dataIndex: "approvalStatus",
      render: (__: string, record: any) => (
        <>
          <span>{record.approvalStatus}</span>
          {record.hasConflict && <Tag color="error">Conflict</Tag>}
        </>
      ),
    },
  ];
  return (
    <div className="App">
      <header className="App-header">Employee Absences</header>
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default App;
