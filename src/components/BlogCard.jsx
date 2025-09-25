import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const { id, thumbnail, category, title, author, published_date } = post;

  return (
    <Link
      to={`/blog/${id}`}
      className="w-full max-w-[392px] transition-transform duration-200 hover:scale-105 border-[#E8E8EA] p-4 rounded-xl shadow-sm"
    >
      <img
        src={thumbnail}
        alt={title}
        loading="lazy"
        className="rounded-lg mb-4 w-full h-[200px] object-cover"
      />
      <div className="space-y-4">
        <span className="px-2.5 py-1 text-[#4b6bfbae] rounded-md bg-gray-100 text-sm inline-block">
          {category}
        </span>
        <h3 className="font-semibold text-[#181A2A] text-2xl/[28px]">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              src={author.avatar}
              alt={author.name}
              loading="lazy"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-[#97989F] text-sm">{author.name}</span>
          </div>
          <p className="text-[#97989F] text-sm">{published_date}</p>
        </div>
      </div>
    </Link>
  );
};

BlogCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.required,
    thumbnail: PropTypes.string.required,
    category: PropTypes.string.required,
    title: PropTypes.string.required,
    author: PropTypes.shape({
      name: PropTypes.string.required,
      avatar: PropTypes.string.required,
    }).required,
    published_date: PropTypes.string.required,
  }).required,
};

export default BlogCard;
