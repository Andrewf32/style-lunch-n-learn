import { useState, useMemo } from "react";

import Modal from "../core/Modal";

import { getObjectUrl } from "../../utils/fileUtils";
import uploadImage from "../../assets/images/upload-dark.svg";
import DragDropPad from "../core/DragDropPad";

const Hover = () => {
  const [image, setImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const displayImage = useMemo(() => {
    if (image) {
      return image;
    } else {
      return uploadImage;
    }
  }, [image]);

  const onSuccessfulDrop = (newFiles) => {
    const imageUrl = getObjectUrl(newFiles[0]);

    if (imageUrl) {
      setImage(imageUrl);
      setIsOpen(false);
    }
  };

  return (
    <div className="hover-container">
      <button onClick={() => setImage(null)}>Clear Image</button>

      <div className="file-upload-wrapper">
        <img
          className="display-image"
          src={displayImage}
          alt="uploading images icon"
          onClick={() => setIsOpen(true)}
          style={{
            height: image ? "480px" : "230px",
          }}
        />

        {/* <div className="image-overlay" /> */}
        {image && <div className="image-overlay" />}
      </div>

      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <DragDropPad onSuccessfulDrop={onSuccessfulDrop}>
          <img src={uploadImage} alt="upload images icon" />

          <div className="drop-hint">
            Drag & Drop or Browse Images on Your Device
          </div>
        </DragDropPad>
      </Modal>
    </div>
  );
};

export default Hover;
