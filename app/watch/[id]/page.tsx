import { notFound } from "next/navigation";
import { VideoPage } from "@/components/video/video-page";
import { VIDEOS } from "@/lib/data/videos";

export function generateStaticParams() {
  return Object.keys(VIDEOS).map((id) => ({
    id,
  }));
}

export default function WatchPage({ params }: { params: { id: string } }) {
  const video = VIDEOS[params.id];

  if (!video) {
    notFound();
  }

  return <VideoPage video={video} />;
}