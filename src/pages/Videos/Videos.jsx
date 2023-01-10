import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { VideoItem } from "../../components/VideoItem";
import { search } from "../../api/async";
export const Videos = () => {
  const { keyword } = useParams();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery({
    queryKey: ["videos", keyword],
    queryFn: () => search(keyword),
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div>비디오 {keyword ? `${keyword}` : "인기 영상"}</div>
      {/* {isLoading && <p>로딩중..</p>} */}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoItem key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
};
