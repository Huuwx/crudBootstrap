import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './EmployyeeTable.css'
import $ from 'jquery';
import AddEmployeeModal from './AddEmployeeModal';
import EditEmployeeModal from './EditEmployeeModal';
import DeleteEmployeeModal from './DeleteEmployeeModal';

const EmployeeTable = () => {
    const [employees, setEmployees] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [currentEmployee, setCurrentEmployee] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(response => response.json())
            .then(data => setEmployees(data));
    }, []);

    const handleAdd = (employee) => {
        fetch('http://localhost:5000/employees', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
        .then(response => response.json())
        .then(newEmployee => setEmployees([...employees, newEmployee]));
    };

    const handleEdit = (employee) => {
        fetch(`http://localhost:5000/employees/${employee.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        })
        .then(response => response.json())
        .then(updatedEmployee => {
            setEmployees(employees.map(emp => (emp.id === updatedEmployee.id ? updatedEmployee : emp)));
        });
    };

    const handleDelete = (id) => {
        fetch(`http://localhost:5000/employees/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            setEmployees(employees.filter(emp => emp.id !== id));
        });
    };

    const handleSelectAll = (e) => {
        const checkboxes = $('table tbody input[type="checkbox"]');
        checkboxes.prop('checked', e.target.checked);
    };

    const handleCheckboxChange = (e) => {
        if (!e.target.checked) {
            $("#selectAll").prop("checked", false);
        }
    };

    return (
        <div className="container-xl">
            <div className="table-responsive">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row">
                            <div className="col-sm-6">
                                <h2>Manage <b>Employees</b></h2>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="btn btn-success" onClick={() => setShowAddModal(true)}><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></a>
                                <a href="#" className="btn btn-danger" onClick={() => setShowDeleteModal(true)}><i className="material-icons">&#xE15C;</i> <span>Delete</span></a>
                            </div>
                        </div>
                    </div>
                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>
                                    <span className="custom-checkbox">
                                        <input type="checkbox" id="selectAll" onClick={handleSelectAll} />
                                        <label htmlFor="selectAll"></label>
                                    </span>
                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Phone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(employee => (
                                <tr key={employee.id}>
                                    <td>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id={`checkbox${employee.id}`} name="options[]" value="1" onClick={handleCheckboxChange} />
                                            <label htmlFor={`checkbox${employee.id}`}></label>
                                        </span>
                                    </td>
                                    <td>{employee.name}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.phone}</td>
                                    <td>
                                        <a href="#" className="edit" onClick={() => { setCurrentEmployee(employee); setShowEditModal(true); }}><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                        <a href="#" className="delete" onClick={() => { setCurrentEmployee(employee); setShowDeleteModal(true); }}><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="clearfix">
                        <div className="hint-text">Showing <b>{employees.length}</b> out of <b>{employees.length}</b> entries</div>
                        <ul className="pagination">
                            <li className="page-item"><a href="#" className="page-link">Previous</a></li>
                            <li className="page-item"><a href="#" className="page-link">1</a></li>
                            <li className="page-item"><a href="#" className="page-link">2</a></li>
                            <li className="page-item active"><a href="#" className="page-link">3</a></li>
                            <li className="page-item"><a href="#" className="page-link">4</a></li>
                            <li className="page-item"><a href="#" className="page-link">5</a></li>
                            <li className="page-item"><a href="#" className="page-link">Next</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <AddEmployeeModal
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
                handleAdd={handleAdd}
            />
            <EditEmployeeModal
                show={showEditModal}
                handleClose={() => setShowEditModal(false)}
                handleEdit={handleEdit}
                employee={currentEmployee}
            />
            <DeleteEmployeeModal
                show={showDeleteModal}
                handleClose={() => setShowDeleteModal(false)}
                handleDelete={handleDelete}
                employee={currentEmployee}
            />
        </div>
    );
};

export default EmployeeTable;