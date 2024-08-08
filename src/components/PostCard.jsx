// src/components/PostCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

const PostCard = ({ post }) => {
  if (!post) return null;

  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <Image
        src={post.imageUrl}
        alt={`Post ${post.id}`}
        className="mb-4"
      />
      <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-200">{post.title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 dark:bg-blue-600">
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
