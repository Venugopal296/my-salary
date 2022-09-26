import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Table } from "antd";
import { useState } from "react";
import CustomModal from "../modal/modal";

const CustomTable = ({ data, pagination, onPagination, onDelete, onSave }) => {
    const [modal2Open, setModal2Open] = useState(false);
    const [emp, setEmp] = useState({});
    const columns = [
        {
            title: "Id",
            dataIndex: "key",
            defaultSortOrder: "descend",
            sorter: (a, b) => a - b,
        },
        {
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) =>
                a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1,
        },
        {
            title: "Login",
            dataIndex: "login",
            sorter: (a, b) =>
                a.login.toUpperCase() > b.login.toUpperCase() ? 1 : -1,
        },
        {
            title: "Salary",
            dataIndex: "salary",
            sorter: (a, b) => a.salary - b.salary,
        },
        {
            title: "Action",
            dataIndex: "",
            key: "x",
            render: (row) => {
                return (
                    <>
                        <EditOutlined
                            style={{ marginRight: 10 }}
                            onClick={() => onEdit(row)}
                        />
                        <DeleteOutlined onClick={() => onDelete(row.key)} />
                    </>
                );
            },
        },
    ];

    const onEdit = (emp) => {
        setEmp(emp);
        setModal2Open(true);
    };

    const valueEdit = (e) => {
        const tempEmp = {
            ...emp,
            [e.target.name]: e.target.value,
        };

        setEmp(tempEmp);
    };

    return (
        <>
            <h4>Middle size table</h4>
            <Table
                columns={columns}
                dataSource={data}
                pagination={pagination}
                onChange={onPagination}
            />
            <CustomModal modal2Open={modal2Open} setModal2Open={setModal2Open}>
                <div>
                    <Input name="name" value={emp.name} onChange={valueEdit} />
                </div>
                <div>
                    <Input
                        name="login"
                        value={emp.login}
                        onChange={valueEdit}
                    />
                </div>
                <div>
                    <Input
                        name="salary"
                        value={emp.salary}
                        onChange={valueEdit}
                    />
                </div>
                <div>
                    <Button
                        onClick={() => {
                            setModal2Open(false);
                            onSave(emp);
                        }}
                    >
                        Save
                    </Button>
                </div>
            </CustomModal>
        </>
    );
};

export default CustomTable;
