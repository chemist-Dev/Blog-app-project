import { Route, Routes } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
