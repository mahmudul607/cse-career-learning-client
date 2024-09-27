import { useState, useEffect } from 'react';

const ImageWithFallback = ({ src, alt, defaultSrc, className }) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    

    img.onload = () => {
      // If the image loads successfully, use the original src
      setImageSrc(src);
    };

    img.onerror = () => {
      // If there's an error, fallback to the default image
      setImageSrc(defaultSrc);
    };
  }, [src, defaultSrc, className]); // Re-run the effect if src or defaultSrc changes

  return <img src={imageSrc} alt={alt} className={className} />;
};

export default ImageWithFallback;