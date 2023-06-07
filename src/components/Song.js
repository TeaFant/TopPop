import Portal from "./Portal";

function Song({ rank, title, artist, album, year }) {
  return (
    <li>
      {artist} || {year}
      <div className="clipping-container">
        <Portal
          rank={rank}
          title={title}
          artist={artist}
          album={album}
          year={year}
        />
      </div>
    </li>
  );
}

export default Song;
