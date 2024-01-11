import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const DeleteModal = () => {
    const [modal, setModal] = useState(false);
    const openModal = () => setModal(!modal);
    const [model, setModel] = useState(false);
    const openModel = () => setModel(!model);
    return (
      <>
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered tabIndex="-1">
            <ModalHeader
              toggle={openModal}
              style={{ border: "none", textAlign: "center" }}
            ></ModalHeader>
            <ModalBody style={{ textAlign: "center" }}>
              Are you sure you want to delete this ad?
            </ModalBody>
            <ModalFooter
              style={{ display: "flex", justifyContent: "space-between", border: "none" }}
            >
              <button
                onClick={openModal}
                style={{
                  color: "#000",
                  background: "#f5f5f5",
                  border: "none",
                  padding: "10px",
                  borderRadius: "10px",
                  margin: "0 10px 10px 10px",
                }}
              >
                Cancel
              </button>
              <button
                onclick={openModal}
                style={{
                  color: "#fff",
                  background: "#A6652C",
                  border: "none",
                  padding: "10px",
                  borderRadius: "10px",
                  margin: "0 10px 10px 10px",
                }}
              >
                Delete
              </button>
            </ModalFooter>
          </Modal>
        </div>
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={model} toggle={openModel} centered tabIndex="-1">
            <ModalHeader
              toggle={openModel}
              style={{ border: "none", textAlign: "center" }}
            ></ModalHeader>
            <ModalBody style={{ textAlign: "center" }}>
              Are you sure you want to delete this ad?
            </ModalBody>
            <ModalFooter
              style={{
                display: "flex",
                justifyContent: "space-between",
                border: "none",
              }}
            >
              <button
                onClick={openModel}
                style={{
                  color: "#000",
                  background: "#f5f5f5",
                  border: "none",
                  padding: "10px",
                  borderRadius: "10px",
                  margin: "0 10px 10px 10px",
                }}
              >
                Cancel
              </button>
              <button
                onclick={openModel}
                style={{
                  color: "#fff",
                  background: "#A6652C",
                  border: "none",
                  padding: "10px",
                  borderRadius: "10px",
                  margin: "0 10px 10px 10px",
                }}
              >
                Pay for your ad
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </>
    );
}

export default DeleteModal