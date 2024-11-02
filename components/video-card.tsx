"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
    views: string;
    author: string;
    authorAvatar: string;
    createdAt: string;
  };
}

export function VideoCard({ video }: VideoCardProps) {
  return (
    <Card className="overflow-hidden group">
      <Link href={`/watch/${video.id}`}>
        <div className="relative aspect-video">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white">
            {video.duration}
          </div>
        </div>
      </Link>
      <div className="p-4">
        <div className="flex gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={video.authorAvatar} alt={video.author} />
            <AvatarFallback>{video.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold line-clamp-2 leading-tight mb-1">
              <Link href={`/watch/${video.id}`}>{video.title}</Link>
            </h3>
            <div className="text-sm text-muted-foreground">
              <Link href={`/channel/${video.author}`} className="hover:text-foreground">
                {video.author}
              </Link>
              <div>
                {video.views} views · {video.createdAt}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}