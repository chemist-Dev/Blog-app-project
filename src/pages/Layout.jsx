import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from "react";
import BlogList from "../components/BlogList";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={setSearchQuery} />
      <main className="flex-grow">
        <Outlet context={{ searchQuery }} />
      </main>
    </div>
  );
};

export default Layout;
