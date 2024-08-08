// src/pages/Home.jsx
import React from 'react';
import { useFetchPosts } from '../hooks/useFetchPosts';
import PostCard from '../components/PostCard';

const Home = () => {
  const posts = useFetchPosts();

  return (
    <div className="container mx-auto p-4">
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">Welcome to My Blog</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">Discover the latest articles and insights.</p>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts && posts.slice(0, 3).map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;
