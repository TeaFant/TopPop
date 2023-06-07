import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./ModalContent.js";

export default function Portal({ rank, title, artist, album, year }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setShowModal(true)}>
        About
      </button>
      {showModal &&
        createPortal(
          <ModalContent
            onClose={() => {
              setShowModal(false);
            }}
            rank={rank}
            title={title}
            artist={artist}
            album={album}
            year={year}
          />,
          document.body
        )}
    </div>
  );
}
