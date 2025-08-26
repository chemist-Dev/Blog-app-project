import { useState } from "react";
import postsData from "../data/blogs.json";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const [visiblePosts, setVisiblePosts] = useState(3);

  const showMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 3);
  };

  const hasMorePosts = visiblePosts < postsData.posts.length;
  return (
    <div className="container mx-auto my-10">
      <div className="flex flex-wrap justify-center">
        {postsData.posts.slice(0, visiblePosts).map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <button
          disabled={!hasMorePosts}
          onClick={showMorePosts}
          className={`
            border-[#696A75] border-1 px-4 py-2 rounded text-[#696A75]
            transition-all duration-300
            ${
              hasMorePosts
                ? "hover:bg-[#F4F4F5] cursor-pointer"
                : "opacity-50 cursor-not-allowed bg-gray-100 border-gray-300"
            }
          `}
        >
          Load More
        </button>
        {!hasMorePosts && (
          <p className="text-[#696A75] ml-4">No more posts to load</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
