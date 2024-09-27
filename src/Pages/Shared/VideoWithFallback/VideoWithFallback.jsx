import { useState, useEffect } from 'react';

const VideoWithFallback = ({ videoUrl, defaultUrl, className }) => {
  const [src, setSrc] = useState(videoUrl);

  useEffect(() => {
    // Check if the video URL is accessible by creating an <iframe> element
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;

    // This will trigger if the iframe fails to load
    iframe.onload = () => {
      setSrc(videoUrl);
    };

    iframe.onerror = () => {
      setSrc(defaultUrl); // Fallback to default video if error occurs
    };

    // Fallback after setting
    setSrc(videoUrl || defaultUrl);
  }, [videoUrl, defaultUrl]);

  return (
    <iframe
      
      className ={className}
      src={src}
      title="Video"
      
      allowFullScreen
    />
  );
};

export default VideoWithFallback;