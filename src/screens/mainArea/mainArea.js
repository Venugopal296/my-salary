import { Button, Layout, message, Upload } from "antd";
import React, { useEffect, useState } from "react";

import "./mainArea.scss";
import CustomModal from "../../components/modal/modal";
import CustomFilter from "../../components/customFilter/customFilter";
import CustomTable from "../../components/customTable/customTable";
import { UploadOutlined } from "@ant-design/icons";
const { Content } = Layout;

const data = [
    {
        key: "1",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "2",
        name: "Jim Green",
        login: "JimGreen",
        salary: 220,
    },
    {
        key: "3",
        name: "Joe Black",
        login: "JoeBlack",
        salary: 12,
    },
    {
        key: "4",
        name: "Jim Red",
        login: "JimRed",
        salary: 40040,
    },
    {
        key: "5",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "6",
        name: "Jim Green",
        login: "JimGreen",
        salary: 220,
    },
    {
        key: "7",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "8",
        name: "Jim Green",
        login: "JimGreen",
        salary: 220,
    },
    {
        key: "9",
        name: "Joe Black",
        login: "JoeBlack",
        salary: 12,
    },
    {
        key: "10",
        name: "Jim Red",
        login: "JimRed",
        salary: 40040,
    },
    {
        key: "11",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "12",
        name: "Jim Green",
        login: "JimGreen",
        salary: 220,
    },
    {
        key: "13",
        name: "Joe Black",
        login: "JoeBlack",
        salary: 12,
    },
    {
        key: "14",
        name: "Jim Red",
        login: "JimRed",
        salary: 40040,
    },
    {
        key: "15",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "16",
        name: "Jim Green",
        login: "JimGreen",
        salary: 220,
    },
    {
        key: "17",
        name: "Joe Black",
        login: "JoeBlack",
        salary: 12,
    },
    {
        key: "18",
        name: "Jim Red",
        login: "JimRed",
        salary: 40040,
    },
    {
        key: "19",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "20",
        name: "Jim Green",
        login: "JimGreen",
        salary: 220,
    },
    {
        key: "21",
        name: "Joe Black",
        login: "JoeBlack",
        salary: 12,
    },
    {
        key: "22",
        name: "Jim Red",
        login: "JimRed",
        salary: 40040,
    },
    {
        key: "23",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "24",
        name: "Jim Green",
        login: "JimGreen",
        salary: 220,
    },
    {
        key: "25",
        name: "Joe Black",
        login: "JoeBlack",
        salary: 12,
    },
    {
        key: "26",
        name: "Jim Red",
        login: "JimRed",
        salary: 40040,
    },
    {
        key: "27",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "29",
        name: "Jim Green",
        login: "JimGreen",
        salary: 220,
    },
    {
        key: "30",
        name: "Joe Black",
        login: "JoeBlack",
        salary: 12,
    },
    {
        key: "31",
        name: "Jim Red",
        login: "JimRed",
        salary: 40040,
    },
    {
        key: "32",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "33",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "34",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "35",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "36",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "37",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "38",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "39",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "40",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "41",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "42",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "43",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "44",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "45",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "46",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "47",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "48",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "49",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "50",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "51",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "52",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "53",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "54",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "55",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "56",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "57",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "58",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
    {
        key: "59",
        name: "John Brown",
        login: "JohnBrown",
        salary: 1000,
    },
];

const props = {
    beforeUpload: (file) => {
        console.log(file);
        const isCSV = file.type === "text/csv";

        if (!isCSV) {
            message.error(`${file.name} is not a csv file`);
        }

        return isCSV || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
        console.log(info.fileList);
    },
};

const MainArea = () => {
    const [modal2Open, setModal2Open] = useState(false);
    const [minSalary, setMinSalary] = useState(null);
    const [maxSalary, setMaxSalary] = useState(null);
    const [empData, setEmpData] = useState(data);
    const [file, setFile] = useState();
    const [array, setArray] = useState([]);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    useEffect(() => {
        const minSal = minSalary ? minSalary : 0;
        const maxSal = maxSalary ? maxSalary : Infinity;

        const filterData = data.filter(
            (emp) => emp.salary >= minSal && emp.salary <= maxSal
        );
        setEmpData(filterData);
    }, [minSalary, maxSalary]);

    const onPagination = (pagination, filters, sorter, extra) => {
        setTableParams(pagination);
    };

    const onSave = (emp) => {
        const index = empData.findIndex((em) => em.key === emp.key);
        const oldData = [...empData];
        oldData.splice(index, 1, emp);

        setEmpData(oldData);
    };

    const onDelete = (key) => {
        const data = empData.filter((el) => el.key !== key);
        setEmpData(data);
    };

    const fileReader = new FileReader();

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    };

    const csvFileToArray = (string) => {
        const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
        const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");
        const filterCsvRows = csvRows.filter(i => i.charAt(0) !== '#')

        const array = filterCsvRows.map((i) => {
            const values = i.split(",");
            const obj = csvHeader.reduce((object, header, index) => {
                object[header] = values[index];
                return object;
            }, {});
            return obj;
        });

        setEmpData([...empData, ...array]);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if (file) {
            fileReader.onload = function (event) {
                const text = event.target.result;
                csvFileToArray(text);
            };

            fileReader.readAsText(file);
        }
    };

    return (
        <Layout className="main-area-layout">
            <Layout className="site-layout">
                <form>
                    <input
                        type={"file"}
                        id={"csvFileInput"}
                        accept={".csv"}
                        onChange={handleOnChange}
                    />

                    <button
                        onClick={(e) => {
                            handleOnSubmit(e);
                        }}
                    >
                        IMPORT CSV
                    </button>
                </form>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <CustomFilter
                        minSalary={minSalary}
                        maxSalary={maxSalary}
                        onMinSalary={(e) => setMinSalary(e.target.value)}
                        onMaxSalary={(e) => setMaxSalary(e.target.value)}
                    />
                    <CustomTable
                        data={empData}
                        pagination={tableParams.pagination}
                        onPagination={onPagination}
                        onSave={onSave}
                        onDelete={onDelete}
                    />
                </Content>
                {modal2Open && (
                    <CustomModal
                        modal2Open={modal2Open}
                        setModal2Open={setModal2Open}
                    >
                        <Upload className="upload-button" {...props}>
                            <Button icon={<UploadOutlined />}>
                                Click to Upload
                            </Button>
                        </Upload>
                    </CustomModal>
                )}
            </Layout>
        </Layout>
    );
};

export default MainArea;
