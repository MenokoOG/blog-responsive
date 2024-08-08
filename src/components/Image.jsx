// src/components/Image.jsx
import React, { useState } from 'react';

const Image = ({ src, alt, className }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative ${className}`}>
      {loading && <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded">Loading...</div>}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        className={`w-full h-auto rounded ${loading || error ? 'hidden' : 'block'}`}
      />
      {error && (
        <div className="flex items-center justify-center w-full h-full bg-gray-200 rounded">
          <span className="text-gray-500">Image not available</span>
        </div>
      )}
    </div>
  );
};

export default Image;
