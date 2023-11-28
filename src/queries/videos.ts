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

interface VideoResponse {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  video_hls: string;
  preview: string;
  extension: string;
  video_player: string;
}

export const getVideoQuery = (id: string) => {
  return useQuery({
    queryKey: ['videos', id],
    queryFn: async () => {
      const response = await api.get<VideoResponse>(`videos/${id}`);
      return response.data;
    }
  })
}
