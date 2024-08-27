import { Link } from "react-router-dom";


const Blog = ({blog}) => {
    return (
        <div className="py-2 pl-6 ">
            
            <li className=" cursor-pointer hover:text-green-300"><Link to={`/learningContents/${blog.id}`}>{blog.title}</Link></li>
        </div>
    );
};

export default Blog;