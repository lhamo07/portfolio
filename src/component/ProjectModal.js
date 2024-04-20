import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const ProjectModal = () => {
  const [modalData, setModalData] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lisque persius interesset
          his et, in quot quidam persequeris vim, ad mea essent possim iriure.
          Quidam lisque persius interesset his et, Lisque persius interesset his
          et, in quot quidam persequeris vim, ad mea essent possim iriure. In
          quot quidam persequeris vim, ad mea essent possim iriure. Quidam
          lisque persius interesset his et. Quidam lisque persius interesset his
          et, Lisque persius interesset his et. Interesset his et, Lisque
          persius interesset his et, in quot quidam persequeris vim, ad mea
          essent possim iriure. Persius interesset his et, Lisque persius
          interesset his et, in quot quidam persequeris vim, ad mea essent
          possim iriure. Quot quidam persequeris vim Quidam lisque persius
          interesset his et, Lisque persius interesset his et, in quot quidam
          persequeris vim, ad mea essent possim iriure.
        </Modal.Body>
      </Modal>{" "}
    </div>
  );
};

export default ProjectModal;
