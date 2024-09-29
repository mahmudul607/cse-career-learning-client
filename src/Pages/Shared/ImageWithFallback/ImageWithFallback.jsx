import { useState, useEffect } from 'react';

const ImageWithFallback = ({ src, alt, defaultSrc, className , baseUrl='http://85.31.235.79:5000/' }) => {
  const [imageSrc, setImageSrc] = useState(`${baseUrl}${src}`);



  useEffect(() => {
    const fullSrc = `${baseUrl}${src}`
    const img = new Image();
    img.src = fullSrc;
    

    img.onload = () => {
      // If the image loads successfully, use the original src
      setImageSrc(fullSrc);
    };

    img.onerror = () => {
      // If there's an error, fallback to the default image
      setImageSrc(defaultSrc);
    };
  }, [src, defaultSrc, className, baseUrl]); // Re-run the effect if src or defaultSrc changes

  return <img src={imageSrc} alt={alt} className={className} />;
};

export default ImageWithFallback;