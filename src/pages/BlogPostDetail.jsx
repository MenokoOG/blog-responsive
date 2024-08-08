// src/pages/BlogPostDetail.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetchPosts } from '../hooks/useFetchPosts';

const BlogPostDetail = () => {
  const { id } = useParams();
  const posts = useFetchPosts();
  const post = posts.find(p => p.id === parseInt(id));

  const [comments, setComments] = useState(post ? post.comments : []);
  const [newComment, setNewComment] = useState({ name: '', comment: '' });

  const handleCommentChange = (e) => {
    const { name, value } = e.target;
    setNewComment({ ...newComment, [name]: value });
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    // Here you would send the updated comments to your backend to update `posts.json`
    setNewComment({ name: '', comment: '' });
  };

  if (!post) return <p>Post not found</p>;

  return (
    <div className="container mx-auto p-4">
      <article className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-700 mb-4">by {post.author}</p>
        <div className="prose prose-lg">
          <p>{post.body}</p>
        </div>
      </article>
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        <div className="bg-gray-100 p-4 rounded-lg">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="mb-2">
                <p className="text-sm font-semibold">{comment.name}</p>
                <p className="text-gray-700">{comment.comment}</p>
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
        <form className="mt-4 space-y-4" onSubmit={handleCommentSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={newComment.name}
              onChange={handleCommentChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Comment</label>
            <textarea
              name="comment"
              value={newComment.comment}
              onChange={handleCommentChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Post Comment</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPostDetail;
