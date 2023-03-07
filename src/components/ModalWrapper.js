import "./UploadModal.css";
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
    <div>
      <button className="w3-button" onClick={handleOpenModal}>+</button>
      {showModal && <UploadModal title="Create Button" message="test" onClose={handleCloseModal}/>}
    </div>
  );
}
