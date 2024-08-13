import { useEffect, useState } from "react";
import jsondata from "../json/jobdatalist.json";
import {
  CustomPagination,
  getData,
  PaginationChange,
} from "../Common/PaginationUtils";
const JobList = () => {
  const [filterjob, setfilterjob] = useState([]);
  const jobDataList = jsondata.jobDataList;
  const [searchTerm, setSearchTerm] = useState("");
  const [perPage, setPerPage] = useState(10);
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const searchFields = ["title", "roleName", "statusDesc"];

    const filteredData = jobDataList.filter((Item) => {
      const lowerSearchTerm = searchTerm.toLowerCase();

      return searchFields.some(
        (field) =>
          typeof Item[field] === "string" &&
          Item[field].toLowerCase().includes(lowerSearchTerm)
      );
    });
    setfilterjob(filteredData);
  }, [jobDataList, searchTerm]);

  const dataToRender =
    filterjob.length > 0 ? getData(current, perPage, filterjob) : [];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-sm-3 ">
            <div className="input-group mb-3 input-primary">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrent(1);
                }}
              />
              <span className="Searchbar">
                <i className="fa-search fas"></i>
              </span>
            </div>
          </div>
          <div className="col-xl-9 col-sm-9  justify-content-end d-flex">
            <div className="col-xl-1">
              <select
                className="form-control"
                value={perPage}
                onChange={(e) => setPerPage(e.target.value)}
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
        </div>
        <div className="grid-form">
          <div className="table-responsive  max-ht">
            <table className="table table-bordered table-hover">
              <thead className="thead-primary text-center">
                <tr>
                  <th>SL.No</th>
                  <th>Job Name</th>
                  <th>Company</th>
                  <th>Location</th>
                  <th>Type</th>
                  <th>PostedDate</th>
                  <th>Apply</th>
                </tr>
              </thead>
              <tbody>
                {dataToRender.map((item, index) => (
                  <tr key={index + 1}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.company}</td>
                    <td>{item.location}</td>
                    <td>{item.type}</td>
                    <td>{item.postedDate}</td>
                    <td>
                      <button>!</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="justify-content-end d-flex">
            <CustomPagination
              total={jobDataList.length}
              current={current}
              pageSize={perPage}
              onChange={(page) => PaginationChange(page, setCurrent)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default JobList;
