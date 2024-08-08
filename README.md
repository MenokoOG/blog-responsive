


# Responsive Blog Website with Tailwind CSS and Vite

## Table of Contents

1. [Project Overview](#project-overview)
2. [Setup Instructions](#setup-instructions)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Components](#components)
6. [Custom Hooks](#custom-hooks)
7. [API Client](#api-client)
8. [Usage](#usage)
9. [Future Improvements](#future-improvements)

## Project Overview

This project is a responsive blog website built with React, Vite, and Tailwind CSS. The website includes a Home page, About page, Blog List page, and Blog Post Detail page. It fetches posts from the JSONPlaceholder API and uses the Lorem Picsum API for random images.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/your-repo.git
cd your-repo
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Visit `http://localhost:3000` in your browser to see the website.

## Project Structure

```
my-blog/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── PostCard.jsx
│   │   ├── Image.jsx
│   │   └── ErrorBoundary.jsx
│   ├── data/
│   │   └── posts.json
│   ├── hooks/
│   │   └── useFetchPosts.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── BlogList.jsx
│   │   └── BlogPostDetail.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── api-client.js
├── .env
├── tailwind.config.js
├── index.html
└── package.json
```

## Features

- Responsive design using Tailwind CSS
- Dark mode support
- Lazy loading images
- Error handling for image loading
- Fetching data from APIs
- Form handling and displaying submitted data

## Components

### Navbar

`src/components/Navbar.jsx`

A responsive navigation bar with links to the Home, About, and Blog pages. It also includes a button to toggle dark mode.

### PostCard

`src/components/PostCard.jsx`

A component that displays individual blog post previews, including the title, excerpt, and a "Read More" button. It uses the `Image` component to display a post image.

### Image

`src/components/Image.jsx`

A component that handles lazy loading of images and displays a placeholder while the image is loading or an error message if the image fails to load.

### ErrorBoundary

`src/components/ErrorBoundary.jsx`

A component that catches JavaScript errors in any child component tree and displays a fallback UI.

## Custom Hooks

### useFetchPosts

`src/hooks/useFetchPosts.js`

A custom hook that fetches blog posts from the JSONPlaceholder API and assigns random images from the Lorem Picsum API.

```jsx
import { useState, useEffect } from 'react';
import { fetchFromAPI } from '../api-client';

const LOREM_PICSUM_API_URL = 'https://picsum.photos/300/200?random=';

export const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsData = await fetchFromAPI('posts');
        const postsWithImages = postsData.slice(0, 10).map(post => ({
          ...post,
          imageUrl: `${LOREM_PICSUM_API_URL}${post.id}`
        }));
        setPosts(postsWithImages);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchData();
  }, []);

  return posts;
};
```

## API Client

### fetchFromAPI

`src/api-client.js`

A utility function to fetch data from the JSONPlaceholder API.

```jsx
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchFromAPI = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
```

## Usage

### Home Page

Displays a welcome message and the latest blog posts.

### About Page

Provides information about the blog and includes a contact form. Submitted data is displayed below the form.

### Blog List Page

Displays a list of all blog posts with pagination or infinite scrolling (if implemented).

### Blog Post Detail Page

Displays the full content of a blog post, including author information and a comments section.

## Future Improvements

- Implement pagination or infinite scrolling for the blog list.
- Add user authentication and authorization.
- Allow users to create, edit, and delete blog posts.
- Implement a more advanced comment system with user interaction.
- Enhance SEO with meta tags and Open Graph data.

---


```

