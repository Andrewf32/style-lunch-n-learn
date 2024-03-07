import { useRef } from "react";

const DragDropPad = ({ children, onSuccessfulDrop }) => {
  const inputRef = useRef(null);

  const handleOnDrop = (e) => {
    e.preventDefault();

    const droppedFile =
      e.target.type === "file" ? e.target.files : e.dataTransfer.files;

    if (droppedFile) {
      onSuccessfulDrop(droppedFile);
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="drag-drop-container"
      onClick={() => inputRef.current.click()}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept="images/*"
        onChange={handleOnDrop}
      />

      {children}
    </div>
  );
};

export default DragDropPad;
