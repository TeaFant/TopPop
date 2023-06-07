import { useEffect } from "react";

export default function ModalContent({
  rank,
  title,
  artist,
  album,
  year,
  onClose,
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <div className="modal">
      <div className="modalContent">
        <h3>Artist: {artist}</h3>
        <p>Song: {title}</p>
        <p>
          Album: {album} || {year}
        </p>
        <p>Rank: {rank}</p>
      </div>
      <button className="btn" onClick={onClose}>
        Close
      </button>
    </div>
  );
}
