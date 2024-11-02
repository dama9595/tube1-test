"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { VideoCard } from "@/components/video-card";
import { ChannelType } from "@/lib/types";

interface ChannelTabsProps {
  channel: ChannelType;
}

export function ChannelTabs({ channel }: ChannelTabsProps) {
  return (
    <div className="container mx-auto px-4">
      <Tabs defaultValue="videos" className="space-y-6">
        <TabsList>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>

        <TabsContent value="videos" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {channel.videos.map((video) => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="about">
          <div className="max-w-3xl space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Description</h2>
              <p className="text-muted-foreground whitespace-pre-line">
                {channel.description}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold mb-2">Stats</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>Joined {channel.joinedDate}</p>
                <p>{channel.totalViews} total views</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}