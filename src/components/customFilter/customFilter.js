import { SearchOutlined } from "@ant-design/icons";
import CustomSearch from "../customSearch/customSearch";

import "./customFilter.scss";

const CustomFilter = ({ minSalary, maxSalary, onMinSalary, onMaxSalary }) => {
    return (
        <div className="searchButtonArea">
            <CustomSearch
                placeholder="Minimum Salary"
                addonBefore={<SearchOutlined />}
                style={{ width: 200 }}
                value={minSalary}
                onChange={onMinSalary}
            />
            <CustomSearch
                placeholder="Maximum Salary"
                style={{ width: 200 }}
                value={maxSalary}
                onChange={onMaxSalary}
            />
        </div>
    );
};

export default CustomFilter;
