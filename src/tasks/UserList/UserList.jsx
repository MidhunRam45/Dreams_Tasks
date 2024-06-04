import React, { useEffect, useState } from "react";
import "./userlist.css";
import axios from "axios";
import { Table, Pagination, Select } from "antd";

const { Option } = Select;

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [paginatedUsers, setPaginatedUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(1);

  const baseUrl = "https://jsonplaceholder.typicode.com/todos";

  const getUsers = async () => {
    const res = await axios.get(baseUrl);
    return res.data;
  };

  useEffect(() => {
    getUsers().then((resp) => {
      const formattedUsers = resp.map((user, index) => ({
        key: user.id,
        siNo: index + 1,
        userId: user.userId,
        title: user.title.substring(0, 40),
        completed: user.completed,
      }));
      setUsers(formattedUsers);
      setPaginatedUsers(formattedUsers.slice(0, pageSize));
    });
  }, [pageSize]);

  const columns = [
    {
      title: "SI No",
      dataIndex: "siNo",
      key: "siNo",
      render: (one, two, index) => <p>{index + 1}</p>,
    },
    {
      title: "User Id",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "Task",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Status",
      dataIndex: "completed",
      key: "completed",
      render: (text, record) => (
        <span style={{ color: record.completed ? "green" : "red" }}>
          {record.completed ? "Completed" : "Pending"}
        </span>
      ),
      filters: [
        { text: "Complete", value: true },
        { text: "Pending", value: false },
      ],
      onFilter: (value, record) => record.completed === value,
    },
  ];

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    setPaginatedUsers(users.slice(startIndex, endIndex));
  };

  const handleUserIdFilter = (value) => {
    setSelectedUserId(value);
    const filteredUsers = users.filter((user) => user.userId === value);
    setPaginatedUsers(filteredUsers.slice(0, pageSize));
  };

  return (
    <div className="user-list-container">
      <Select
        className="user-id-select"
        defaultValue={selectedUserId}
        onChange={handleUserIdFilter}
      >
        {[...Array(10).keys()].map((num) => (
          <Option key={num + 1} value={num + 1} className="select">
            {num + 1}
          </Option>
        ))}
      </Select>
      <div className="table-container">
        <Table
          className="user-list-table"
          columns={columns}
          dataSource={paginatedUsers}
          pagination={false}
        />
      </div>
      <Pagination
        className="user-list-pagination"
        current={currentPage}
        pageSize={pageSize}
        total={users.length}
        onChange={handlePageChange}
        showSizeChanger
        onShowSizeChange={handlePageChange}
      />
    </div>
  );
}

export default UserList;
