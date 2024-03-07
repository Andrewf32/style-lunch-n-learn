import { useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const GeneralModal = (props) => {
  const { isOpen, onRequestClose, overlay, content, children } = props;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => (document.body.style.overflow = "unset");
    }
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: { ...overlay },
        content: {
          position: "relative",
          inset: "20%",
          width: "60%",
          height: "50%",
          borderRadius: "10px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 12px -2px rgba(0, 0, 0, 0.7)",
          ...content,
        },
      }}
    >
      {children}
    </Modal>
  );
};

export default GeneralModal;
