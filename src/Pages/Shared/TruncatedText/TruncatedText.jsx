import { useState } from "react";
import "./TruncatedText.css"
const TruncatedText = ({ text, maxLength }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpanded = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div>
        <div className={isExpanded ? 'full-text text-white' : 'truncate text-white'}>
          {isExpanded ? text :  text.length > maxLength ? `${text.slice(0, maxLength)}...` : text}
        </div>
        <button className={isExpanded ? 'text-red-600' : 'text-green-700'} onClick={toggleExpanded}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    );
  }

  export default TruncatedText;