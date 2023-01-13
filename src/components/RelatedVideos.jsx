import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { VideoItem } from "./VideoItem";

export const RelatedVideos = ({ id }) => {
  const { youtube } = useYoutubeApi();
  const { data: videos } = useQuery({
    queryKey: ["related", id],
    queryFn: () => youtube.relatedVideos(id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <>
      {videos && (
        <ul className="grid grid-cols-1 ml-4">
          {videos.map((video) => (
            <VideoItem key={video.id} video={video} type="list" />
          ))}
        </ul>
      )}
    </>
  );
};
