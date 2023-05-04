import "./SelectedBeast.css";

export default function SelectedBeast({ beastModal, handleModal }) {
  return (
    <div className="modal">
      <h2>{beastModal.title}</h2>
      <img src={beastModal.imageUrl} alt="The Beast" />
      <p>{beastModal.description}</p>
      <p onClick={handleModal}>X</p>
    </div>
  );
}