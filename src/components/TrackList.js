import React, { useContext } from "react";
import { DataContext } from "./App";

import Track from "./Track";

function TrackList() {
  const { data } = useContext(DataContext);
  return (
    <ul id="songs">
      {data.length > 0 && data.map((d, i) => <Track key={i} d={d} />)}
    </ul>
  );
}

export default TrackList;
