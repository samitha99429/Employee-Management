
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './adminDashboard.css'

const AdminDashboard = () => {
    const [employee, setEmployee] = useState([]);
    const [employeeType, setEmployeeType] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/api/employee/all").then((res) => {
            setEmployee(res.data);
            console.log(res.data);
        });
    }, []);

    const handleFilterChange = (event) => {
        setEmployeeType(event.target.value);
    };

    const handleClearFilter = () => {
        setEmployeeType("");
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/api/employee/${id}`).then((res) => {
            alert("Employee Deleted Successfully!");
            setEmployee(employee.filter((em) => em._id !== id));
        });
    };

    const filteredEmployees = employee.filter(
        (em) => !employeeType || em.Employee_Type === employeeType
    );

    return (
        <div>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="employeeTypeFilter" className="form-label">
                        Filter by Employee Type:
                    </label>
                    <select
                        className="form-select"
                        id="employeeTypeFilter"
                        value={employeeType}
                        onChange={handleFilterChange}
                    >
                        <option value="">All</option>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contractor">Contractor</option>
                    </select>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h1>Employee List</h1>
                    {employeeType && (
                        <button className="btn btn-secondary" onClick={handleClearFilter}>
                            Clear Filter
                        </button>
                    )}
                </div>

                {filteredEmployees.length > 0 ? (
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Display Name</th>
                                <th>Emp ID</th>
                                <th>Designation</th>
                                <th>Employee Type</th>
                                <th>Experience</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map((em) => (
                                <tr key={em._id}>

                                    <td>{em.Display_Name}</td>
                                    <td>{em._id}</td>
                                    <td>{em.Designation}</td>
                                    <td>{em.Employee_Type}</td>
                                    <td>{em.Experience}</td>
                                    <td>
                                        <Link
                                            to={`update/${em._id}`}
                                            className="btn btn-primary btn-sm me-2"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(em._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div>No employees found</div>
                )}

                <div className="mt-3">
                    <Link to="/add" className="btn btnAddd">
                        Add Employee
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;