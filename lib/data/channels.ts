import { ChannelType } from "@/lib/types";

export const MOCK_CHANNELS: Record<string, ChannelType> = {
  "Nature Channel": {
    name: "Nature Channel",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    banner: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
    subscribers: "500K",
    description: "Exploring the beauty of nature through stunning cinematography. Join us on our journey to discover Earth's most breathtaking locations.",
    joinedDate: "Jan 2020",
    totalViews: "10M",
    videos: [
      {
        id: "1",
        title: "Amazing Sunset Time-lapse",
        thumbnail: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        duration: "4:32",
        views: "1.2M",
        author: "Nature Channel",
        authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        createdAt: "2 days ago"
      },
      {
        id: "5",
        title: "Mountain Peaks at Dawn",
        thumbnail: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
        duration: "8:15",
        views: "756K",
        author: "Nature Channel",
        authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        createdAt: "1 week ago"
      },
      {
        id: "6",
        title: "Rainforest Adventures",
        thumbnail: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
        duration: "12:48",
        views: "925K",
        author: "Nature Channel",
        authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
        createdAt: "2 weeks ago"
      }
    ]
  }
};