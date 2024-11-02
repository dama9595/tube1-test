"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChannelType } from "@/lib/types";

interface ChannelHeaderProps {
  channel: ChannelType;
}

export function ChannelHeader({ channel }: ChannelHeaderProps) {
  return (
    <>
      <div className="relative h-48 md:h-64">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${channel.banner})` }}
        >
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="relative -mt-20 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            <Avatar className="h-32 w-32 border-4 border-background">
              <AvatarImage src={channel.avatar} alt={channel.name} />
              <AvatarFallback>{channel.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">{channel.name}</h1>
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center text-muted-foreground">
                <div className="space-x-2">
                  <span>{channel.subscribers} subscribers</span>
                  <span>•</span>
                  <span>{channel.totalViews} views</span>
                </div>
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}