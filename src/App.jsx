import { Route, Routes } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Layout from "./pages/Layout";
import { useOutletContext } from "react-router-dom";
import BlogList from "./components/BlogList";
const BlogListWithSearch = () => {
  const { searchQuery } = useOutletContext();
  return <BlogList searchQuery={searchQuery} />;
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BlogListWithSearch />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
