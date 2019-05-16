import React from "react";

function Track({ d }) {
  return (
    <li key={d.id}>
      <h4>
        <a target="_blank" href={d.external_urls.spotify}>
          {d.name} - {d.artists[0].name}
        </a>
      </h4>
      <img className="song_img" src={d.album.images[0].url} />
      <br />
      <audio controls>
        <source src={d.preview_url} type="audio/mpeg" />
      </audio>
    </li>
  );
}

export default Track;
