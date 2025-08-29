import { useParams } from "react-router";
import postsData from "../data/blogs.json";

const BlogPost = () => {
  const { id } = useParams();
  const post = postsData.posts.find((post) => post.id.toString() === id);

  if (!post) {
    return (
      <div className="container mx-auto my-10 px-4 text-center text-5xl font-bold text-[#696A75]">
        blog not found
      </div>
    );
  }
  return (
    <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl mx-auto px-4">
      <span className="bg-[#4B6BFB] text-white rounded-lg px-3 py-1.5 mb-4 inline-block text-sm">
        {post.category}
      </span>
      <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
      <div className="flex items-center mb-6">
        <img
          src={post.author.avatar}
          alt={post.author.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex items-center gap-5">
          <p className="font-semibold">{post.author.name}</p>
          <p className="text-gray-500">{post.published_date}</p>
        </div>
      </div>
      <img
        src={post.thumbnail}
        alt={post.title}
        className="w-full h-[462px] object-cover rounded-xl mb-6 mx-auto"
      />
      <div className="prose max-w-none">{post.content}</div>
      <div className="desc">
        <p className="mt-6 text-lg text-gray-800 leading-relaxed py-4 ">
          {post.description}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
