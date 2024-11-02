"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThumbsUp, ThumbsDown, Share2, Flag } from "lucide-react";
import { VideoType } from "@/lib/types";

interface VideoInfoProps {
  video: VideoType;
}

export function VideoInfo({ video }: VideoInfoProps) {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">{video.title}</h1>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={video.authorAvatar} alt={video.author} />
            <AvatarFallback>{video.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <Link href={`/channel/${encodeURIComponent(video.author)}`} className="font-semibold hover:underline">
              {video.author}
            </Link>
            <div className="text-sm text-muted-foreground">500K subscribers</div>
          </div>
          <Button>Subscribe</Button>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary" className="gap-2">
            <ThumbsUp className="h-4 w-4" />
            50K
          </Button>
          <Button variant="secondary" className="gap-2">
            <ThumbsDown className="h-4 w-4" />
          </Button>
          <Button variant="secondary">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Flag className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <Card className="p-4">
        <div className="flex gap-2 text-sm text-muted-foreground mb-2">
          <span>{video.views} views</span>
          <span>•</span>
          <span>{video.createdAt}</span>
        </div>
        <p className="whitespace-pre-line">Experience the beauty of nature with this stunning video captured over the course of several hours. Watch as the world transforms before your eyes.</p>
      </Card>

      <Separator className="my-6" />

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Comments</h2>
        <div className="text-center text-muted-foreground py-12">
          Sign in to view comments
        </div>
      </div>
    </div>
  );
}