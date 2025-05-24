import Modal from "react-modal";
import { ImageInfo } from "../../types/types";
import { FC } from "react";
import css from "./imageModal.module.css";

interface ImageModalProps {
  isModalOpen: boolean;
  openedItem: ImageInfo | null;
  closeModal: () => void;
}

const ImageModal: FC<ImageModalProps> = ({
  isModalOpen,
  openedItem,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "gray",
        },
        content: {
          display: "flex",
          placeItems: "center",
        },
      }}
    >
      <img
        className={css.modalImg}
        src={openedItem?.urls.full}
        alt={openedItem?.alt_description}
      />
    </Modal>
  );
};

export default ImageModal;