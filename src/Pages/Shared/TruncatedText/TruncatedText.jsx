import { useState } from "react";
import "./TruncatedText.css"
const TruncatedText = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div>
        <div className={isExpanded ? 'full-text' : 'truncate'}>
          {isExpanded ? text : `${text.slice(0, maxLength)}...`}
        </div>
        <button className={isExpanded ? 'text-red-600' : 'text-green-700'} onClick={toggleExpanded}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    );
  };

  export default TruncatedText;