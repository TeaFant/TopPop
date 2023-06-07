import { useState } from "react";
import "../css/main.css";
import Song from "./Song";

function Main({ songs }) {
  const [filterState, setFilterState] = useState({ sort: "" });

  const songsToDisplay = filterState.sort
    ? /**array sort */ [...songs].sort((a, b) => {
        if (filterState.sort === "asc") {
          return a.year - b.year;
        }
        if (filterState.sort === "desc") {
          return b.year - a.year;
        }
      })
    : songs;

  const sortedSongs = songsToDisplay.map((song) => (
    <Song
      key={song.title}
      rank={song.rank}
      title={song.title}
      artist={song.artist}
      album={song.album}
      year={song.year}
    />
  ));

  return (
    <div>
      <div className="mainHeader">
        <h3>Artist || Year</h3>
        <>
          <label>
            Sort:
            <select
              value={filterState.sort}
              onChange={(e) => setFilterState({ sort: e.target.value })}
            >
              <option value="">Song list</option>
              <option value="asc">Year ascending</option>
              <option value="desc">Year descending</option>
            </select>
          </label>
          <hr />
        </>
      </div>
      <div>
        <ul>{sortedSongs}</ul>
      </div>
    </div>
  );
}

export default Main;
