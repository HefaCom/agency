"use client";

import { useEffect, useRef } from "react";

interface YouTubeVideoProps {
  videoId: string;
}

export function YouTubeVideo({ videoId }: YouTubeVideoProps) {
  const playerRef = useRef<any>(null);

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // Initialize player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        videoId,
        playerVars: {
          autoplay: 1,
          loop: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          enablejsapi: 1,
          modestbranding: 1,
          mute: 1,
          playlist: videoId
        },
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
          }
        }
      });
    };

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <div id="youtube-player" className="absolute top-0 left-0 w-full h-full" />
  );
}