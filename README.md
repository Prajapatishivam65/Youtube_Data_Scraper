# YouTube Data Scraper

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Configuration](#configuration)
5. [Project Structure](#project-structure)
6. [Components](#components)
7. [API](#api)
8. [Usage](#usage)
9. [Styling](#styling)

## Overview

The YouTube Data Scraper is a web application built with Next.js that allows users to search for YouTube videos by genre and display relevant information about these videos. It utilizes the YouTube Data API to fetch video data and presents it in an attractive, user-friendly interface.

## Features

- Search for YouTube videos by genre
- Display video information including title, channel, view count, and comments
- Responsive design for various screen sizes
- Dark mode support
- Error handling for API quota limits and other potential issues

## Technologies Used

- Next.js 13 (App Router)
- React
- TypeScript
- Tailwind CSS
- next-themes for dark mode
- YouTube Data API v3
- Heroicons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- A Google account with access to the YouTube Data API

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/youtubescrape.git
   cd youtubescrape
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Configuration

1. Create a `.env.local` file in the root directory and add your YouTube Data API key:

   ```env
   YOUTUBE_API_KEY=your_api_key_here
   ```

2. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Project Structure

```
/c:/NextJS_Project/youtubescrape/
├── components
├── pages
├── public
├── styles
├── utils
├── .env.local
├── package.json
└── README.md
```

## Components

- `Genreform`: Component for searching YouTube videos.
- `VideoList`: Component for displaying a list of videos

## API

- `YouTube Data API v3`: Used to fetch video data.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the search bar to find YouTube videos by genre.
3. View video details including title, channel, view count, and comments.

## Styling

- Tailwind CSS is used for styling.
- Custom styles can be added in the `styles` directory.
