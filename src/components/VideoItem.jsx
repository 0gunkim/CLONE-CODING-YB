import React from "react";
import { useNavigate } from "react-router-dom";
import { formatAgo } from "../util/timeago";
export const VideoItem = ({ video, type }) => {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAtc } = video.snippet;
  const moveHandleDetail = () => {
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  const isList = type === "list";
  return (
    <>
      {/* <video url={video.thumbnails.medium.url}></video> */}
      <li
        className={isList ? "flex gap-1 mb-2" : ""}
        onClick={moveHandleDetail}
      >
        <img
          className={isList ? "w-60 mr-2" : "w-full"}
          src={thumbnails.medium.url}
          alt={title}
        />
        <div>
          <p className="font-semibold my-2 line-clamp-3">{title}</p>
          <p className="text-sm opacity-60">{channelTitle}</p>
          <p className="text-sm opacity-60">
            {formatAgo(publishedAtc, "en-US")}
          </p>
        </div>
      </li>
    </>
  );
};
