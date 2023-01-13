import React from "react";

export const VideoItem = ({ video }) => {
  return (
    <>
      <div>{video.snippet.title}</div>
    </>
  );
};
