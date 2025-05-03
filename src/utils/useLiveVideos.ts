import { useEffect, useState } from 'react';
import axios from 'axios';

interface LiveVideo {
  videoId: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  channelTitle: string;
  videoDuration:string
}

export const useLiveVideos = (channelId: string, apiKey: string, videoType:string) => {
  const [liveVideos, setLiveVideos] = useState<LiveVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLiveVideos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://www.googleapis.com/youtube/v3/search',
          {
            params: {
              part: 'snippet',
              key: apiKey,
              type:'video',
              maxResults: 5,
              videoDuration:videoType
            },
          }
        );

        const videos: LiveVideo[] = response.data.items.map((item: any) => ({
          videoId: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnailUrl: item.snippet.thumbnails.medium.url,
          publishedAt: item.snippet.publishedAt,
          channelTitle: item.snippet.channelTitle,
        }));

        setLiveVideos(videos);
        setError(null);
      } catch (err: any) {
        setError(err.message || 'Error fetching live videos');
        setLiveVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveVideos();
  }, [channelId, apiKey]);

  return { liveVideos, loading, error };
};
