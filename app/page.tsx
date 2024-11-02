import { Button } from "@/components/ui/button";
import { VideoCard } from "@/components/video-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FEATURED_VIDEOS = [
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
    id: "2",
    title: "Urban Photography Tips",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    duration: "10:15",
    views: "850K",
    author: "Photo Pro",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    createdAt: "5 days ago"
  },
  {
    id: "3",
    title: "Cooking Masterclass",
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d",
    duration: "15:45",
    views: "2.1M",
    author: "Chef's Kitchen",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    createdAt: "1 week ago"
  },
  {
    id: "4",
    title: "Travel Vlog: Hidden Gems",
    thumbnail: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    duration: "22:18",
    views: "975K",
    author: "Wanderlust",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    createdAt: "2 weeks ago"
  }
];

export default function Home() {
  return (
    <div className="container mx-auto py-6">
      <Tabs defaultValue="trending" className="space-y-6">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
          </TabsList>
          <Button>
            Upload Video
          </Button>
        </div>

        <TabsContent value="trending" className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Featured Videos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {FEATURED_VIDEOS.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </section>
        </TabsContent>

        <TabsContent value="following">
          <div className="flex items-center justify-center h-[400px] text-muted-foreground">
            Sign in to see videos from creators you follow
          </div>
        </TabsContent>

        <TabsContent value="live">
          <div className="flex items-center justify-center h-[400px] text-muted-foreground">
            No live streams available
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}