import { useState, useMemo } from "react";
import postsData from "../data/blogs.json";
import BlogCard from "./BlogCard";

const BlogList = ({ searchQuery }) => {
  const [visiblePosts, setVisiblePosts] = useState(3);

  // Use useMemo to cache filtered posts
  const filteredPosts = useMemo(() => {
    return postsData.posts.filter((post) =>
      searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    );
  }, [searchQuery]);

  const showMorePosts = () => {
    setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length));
  };

  const hasMorePosts = visiblePosts < filteredPosts.length;
  const visiblePostsList = filteredPosts.slice(0, visiblePosts);

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {visiblePostsList.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        {hasMorePosts ? (
          <button
            onClick={showMorePosts}
            className="border border-[#696A75] px-4 py-2 rounded text-[#696A75] hover:bg-[#F4F4F5] transition-all duration-300"
          >
            Load More
          </button>
        ) : (
          <p className="text-[#696A75]">No more posts to load</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
