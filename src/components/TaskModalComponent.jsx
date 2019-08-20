import React from 'react';
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

const TaskModal = ({modalOpen, modalData}) =>
    <Modal isOpen={modalOpen} size="lg">
        <ModalHeader>
            <h3>Task description</h3>
        </ModalHeader>
        <ModalBody>
            <dl class="row">
                <dt class="col-sm-3">Name:</dt>
                <dd class="col-sm-9">{modalData.name}</dd>
                <dt class="col-sm-3">Description:</dt>
                <dd class="col-sm-9">{modalData.description}</dd>
                <dt class="col-sm-3">Due:</dt>
                <dd class="col-sm-9">{modalData.due}</dd>
                <dt class="col-sm-3">Priorioty:</dt>
                <dd class="col-sm-9">{modalData.priority}</dd>
            </dl>
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" outline onClick={() => console.log('close modal!')}>Back</Button>
            <Button color="success" onClick={() => console.log('finish this sucker')}>Mark as Completed</Button>
        </ModalFooter>
    </Modal>

export default TaskModal;
