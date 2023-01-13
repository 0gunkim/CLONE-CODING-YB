import React from "react";
import { useLocation } from "react-router-dom";
import { AboutChannel } from "../../components/AboutChannel";
import { RelatedVideos } from "../../components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col lg:flex-row">
      <article className="basis-4/6">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="350"
          src={`https://www.youtube.com/embed/${video.id}`}
          title={title}
        />
        <div className="p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <AboutChannel id={channelId} name={channelTitle}></AboutChannel>
          <pre className="whitespace-pre-wrap">{description}</pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
