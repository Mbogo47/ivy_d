import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const NotPaidAd = () => {
  //confirmation
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(!modal);

  return (
    <div>
      <div className="modal-dialog modal-dialog-centered">
        <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
          <ModalHeader toggle={openModal}>Ad Posted</ModalHeader>
          <ModalBody>uhsjksdn</ModalBody>
          <ModalFooter>
            <button onClick={openModal}>Manage ads</button>
            <button onclick={openModal}>Pay Ad</button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  );
};

export default NotPaidAd
