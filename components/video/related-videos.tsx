"use client";

import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { VIDEOS } from "@/lib/data/videos";

interface RelatedVideosProps {
  currentVideoId: string;
}

export function RelatedVideos({ currentVideoId }: RelatedVideosProps) {
  const relatedVideos = Object.values(VIDEOS)
    .filter(video => video.id !== currentVideoId)
    .slice(0, 5);

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Related Videos</h2>
      <div className="space-y-4">
        {relatedVideos.map((video) => (
          <Link key={video.id} href={`/watch/${video.id}`} className="block">
            <Card className="flex gap-4 p-2 hover:bg-muted/50 transition-colors">
              <div className="relative aspect-video w-40 rounded-sm overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-1 right-1 bg-black/80 px-1 rounded text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-medium line-clamp-2 text-sm mb-1">{video.title}</h3>
                <div className="text-xs text-muted-foreground">
                  <div>{video.author}</div>
                  <div>{video.views} views • {video.createdAt}</div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}