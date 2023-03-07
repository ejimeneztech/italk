export default function UploadModal(props) {
  return (
    <div className="modal">
      <div className="modal-header">
        <button className="close-button" onClick={props.onClose}>
          X
        </button>
      </div>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
    </div>
  );
}
