import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const DeleteEmployeeModal = ({ show, handleClose, handleDelete, employee }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Employee</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure you want to delete {employee ? employee.name : ''}?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={() => { handleDelete(employee.id); handleClose(); }}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteEmployeeModal;