import React from "react";
import { Link } from "react-router";

const BlogCard = ({ post }) => {
  return (
    <Link
      to={`/blog/${post.id}`}
      className="w-[392px] transition-transform duration-200 hover:scale-105 border-[#E8E8EA] p-4 rounded-xl shadow-sm m-4"
    >
      <img
        src={post.thumbnail}
        alt={post.title}
        className="rounded-lg mb-4 w-[364px] h-[200px] object-cover"
      />
      <div className="info">
        <span className="px-2.5 py-1 text-[#4b6bfbae] rounded-md bg-gray-100 text-sm mb-4 inline-block">
          {post.category}
        </span>
        <h3 className="font-semibold text-[#181A2A] text-2xl/[28px]">
          {post.title}
        </h3>
        <div className="flex items-center justify-between mt-4 mb-2">
          <div className="flex items-center justify-around">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-[#97989F] text-sm">{post.author.name}</span>
          </div>
          <p className="text-[#97989F] text-sm">{post.published_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
