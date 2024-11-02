"use client";

import { VideoPlayer } from "@/components/video/video-player";
import { VideoInfo } from "@/components/video/video-info";
import { RelatedVideos } from "@/components/video/related-videos";
import { VideoType } from "@/lib/types";

interface VideoPageProps {
  video: VideoType;
}

export function VideoPage({ video }: VideoPageProps) {
  return (
    <div className="container mx-auto py-6 gap-6 grid grid-cols-1 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <VideoPlayer />
        <VideoInfo video={video} />
      </div>
      <RelatedVideos currentVideoId={video.id} />
    </div>
  );
}