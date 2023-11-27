import { useQuery } from "@tanstack/vue-query";
import { api } from "../api";

interface Video {
  id: string;
  description: string;
  title: string;
  thumbnail: string;
  video_hls: string;
}

interface VideosResponse {
  pages: number;
  total: number;
  videos: Video[];
}

export const listVideosQuery = () => {
  return useQuery({
    queryKey: ['videos'],
    queryFn: async () => {
      const response = await api.get<VideosResponse>('videos');
      return response.data;
    }
  });
}
