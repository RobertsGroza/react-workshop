import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const TaskModal = ({modalOpen, modalData}) =>
    <Modal isOpen={modalOpen} size="lg">
        <ModalHeader>
            Task description
        </ModalHeader>
        <ModalBody>
            <dl className="row">
                <dt className="col-sm-3">Name:</dt>
                <dd className="col-sm-9">{modalData.name}</dd>
                <dt className="col-sm-3">Description:</dt>
                <dd className="col-sm-9">{modalData.description}</dd>
                <dt className="col-sm-3">Due:</dt>
                <dd className="col-sm-9">{modalData.due}</dd>
                <dt className="col-sm-3">Priorioty:</dt>
                <dd className="col-sm-9">{modalData.priority}</dd>
            </dl>
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" outline onClick={() => console.log('close modal!')}>Back</Button>
            <Button color="success" onClick={() => console.log('finish this sucker')}>Mark as Completed</Button>
        </ModalFooter>
    </Modal>

export default TaskModal;
