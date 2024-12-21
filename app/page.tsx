"use client";

import { useState } from "react";
import { GenreForm } from "../components/GenreForm";
import { VideoList } from "../components/VideoList";

export default function Home() {
  const [currentGenre, setCurrentGenre] = useState<string | null>(null);

  const handleGenreSubmit = (genre: string) => {
    setCurrentGenre(genre);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 md:mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
          YouTube Data Scraper
        </h1>
        <div className="bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <GenreForm onSubmit={handleGenreSubmit} />
            {currentGenre && (
              <div className="mt-8">
                <VideoList genre={currentGenre} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
