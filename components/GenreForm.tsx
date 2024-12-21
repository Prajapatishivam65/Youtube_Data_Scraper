"use client";

import { useState } from "react";
import { SearchIcon } from "lucide-react";

interface GenreFormProps {
  onSubmit: (genre: string) => void;
}

export function GenreForm({ onSubmit }: GenreFormProps) {
  const [genre, setGenre] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(genre);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-md p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="genre"
            className="block text-sm font-medium text-gray-300"
          >
            Enter Genre
          </label>
          <div className="relative">
            <input
              id="genre"
              type="text"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              placeholder="e.g., cooking, jazz, travel"
              className="w-full px-4 py-2 pl-10 rounded-md 
                       border border-gray-600
                       bg-gray-800 
                       text-white
                       placeholder-gray-500
                       focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400
                       bg-transparent
                       transition-all duration-200"
              required
            />
            <SearchIcon
              className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 
                       text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full sm:w-auto px-6 py-2 
                   bg-indigo-500 hover:bg-indigo-600
                   text-white font-medium rounded-md
                   focus:outline-none focus:ring-2 focus:ring-indigo-400 
                   focus:ring-offset-gray-800
                   transition-colors duration-200
                   disabled:opacity-50 disabled:cursor-not-allowed
                   shadow-sm hover:shadow"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <div
                className="w-4 h-4 border-2 border-white border-t-transparent 
                           rounded-full animate-spin"
              />
              Processing...
            </span>
          ) : (
            "Scrape Data"
          )}
        </button>
      </form>
    </div>
  );
}

export default GenreForm;
