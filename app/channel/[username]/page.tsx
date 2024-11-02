import { notFound } from "next/navigation";
import { ChannelHeader } from "@/components/channel/channel-header";
import { ChannelTabs } from "@/components/channel/channel-tabs";
import { MOCK_CHANNELS } from "@/lib/data/channels";

export function generateStaticParams() {
  return Object.keys(MOCK_CHANNELS).map((username) => ({
    username: encodeURIComponent(username),
  }));
}

export default function ChannelPage({ params }: { params: { username: string } }) {
  const channel = MOCK_CHANNELS[decodeURIComponent(params.username)];
  
  if (!channel) {
    notFound();
  }

  return (
    <div>
      <ChannelHeader channel={channel} />
      <ChannelTabs channel={channel} />
    </div>
  );
}