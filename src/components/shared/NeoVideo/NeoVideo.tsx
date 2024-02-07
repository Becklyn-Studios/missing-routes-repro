"use client";

import React, { useRef } from "react";

export interface NeoVideoProps {
  copyright: string;
  caption: string;
  youtubeId: string;
}

export const NeoVideo: React.FC<NeoVideoProps> = ({
  copyright,
  caption,
  youtubeId,
}) => {
  const ref = useRef<HTMLIFrameElement>(null);

  return (
    <figure className="neo-video">
      <div className="video-wrapper">
        <iframe
          ref={ref}
          data-cmp-vendor="s30"
          data-cmp-src={`https://www.youtube-nocookie.com/embed/${youtubeId}?modestbranding=true&showinfo=false&rel=0`}
          className="cmplazyload"
          src="about:blank"
          width="560"
          height="315"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <figcaption>{caption}</figcaption>
      <footer>
        <small>{copyright}</small>
      </footer>
    </figure>
  );
};
