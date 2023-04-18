import "./UploadModal.css";
import "./ModalWrapper.css";
import React, { useState } from "react";
import UploadModal from "./UploadModal";

export default function PlusButton(props) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="ModalWrapper">
      <button className="w3-button" onClick={handleOpenModal}>New button</button>
      {showModal && <UploadModal title="Create Button" onSubmit={handleCloseModal} onClose={handleCloseModal} refreshData={props.refreshData}/>}
    </div>
  );
}
