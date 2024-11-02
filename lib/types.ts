export interface VideoType {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
  author: string;
  authorAvatar: string;
  createdAt: string;
}

export interface ChannelType {
  name: string;
  avatar: string;
  banner: string;
  subscribers: string;
  description: string;
  joinedDate: string;
  totalViews: string;
  videos: VideoType[];
}