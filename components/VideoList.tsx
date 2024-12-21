"use client";

import { useState, useEffect } from "react";
import { EyeIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

interface Video {
  videoUrl: string;
  title: string;
  channelTitle: string;
  viewCount: string;
  commentCount: string;
  thumbnailUrl: string;
  description: string;
}

interface VideoListProps {
  genre: string;
}

export function VideoList({ genre }: VideoListProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (genre) {
      setLoading(true);
      setError(null);
      fetch(`/api/scrape?genre=${encodeURIComponent(genre)}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) {
            setVideos(data);
          } else if (data.error) {
            setError(data.error);
          } else {
            setError("Received unexpected data format");
          }
        })
        .catch(() => {
          setError("Failed to fetch video data");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [genre]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden animate-pulse"
          >
            <div className="h-48 bg-gray-700" />
            <div className="p-4 space-y-3">
              <div className="h-6 bg-gray-700 rounded w-3/4" />
              <div className="h-4 bg-gray-700 rounded w-1/2" />
              <div className="h-4 bg-gray-700 rounded w-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="bg-red-900/20 border-l-4 border-red-500 p-4 rounded-lg"
        role="alert"
      >
        <p className="font-bold text-red-200">Error</p>
        <p className="text-red-300">{error}</p>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-400">
          No videos found for the genre:{" "}
          <span className="font-semibold">{genre}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
        Videos for {genre}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <a
            key={video.videoUrl}
            href={video.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={video.thumbnailUrl || `/api/placeholder/200/120`}
                alt={video.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </div>

            <div className="p-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-100 group-hover:text-indigo-400 line-clamp-2 transition-colors">
                {video.title}
              </h3>

              <p className="text-sm font-medium text-gray-300">
                {video.channelTitle}
              </p>

              <p className="text-sm text-gray-400 line-clamp-2">
                {video.description}
              </p>

              <div className="flex justify-between items-center pt-2 text-sm text-gray-400">
                <span className="flex items-center gap-1">
                  <EyeIcon className="h-4 w-4" />
                  {video.viewCount}
                </span>
                <span className="flex items-center gap-1">
                  <ChatBubbleLeftIcon className="h-4 w-4" />
                  {video.commentCount}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default VideoList;
