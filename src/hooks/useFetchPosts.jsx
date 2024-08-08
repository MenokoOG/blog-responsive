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
          imageUrl: `${LOREM_PICSUM_API_URL}${post.id}`,
          comments: [] // Initialize comments array
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
