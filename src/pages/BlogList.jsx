// src/pages/BlogList.jsx
import React from 'react';
import { useFetchPosts } from '../hooks/useFetchPosts';
import PostCard from '../components/PostCard';

const BlogList = () => {
  const posts = useFetchPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-200">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts && posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;
