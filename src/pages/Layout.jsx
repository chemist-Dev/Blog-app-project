import { useState, useCallback } from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";

const Layout = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header onSearch={handleSearch} />
      <main className="flex-grow">
        <Outlet context={{ searchQuery }} />
      </main>
    </div>
  );
};

export default Layout;
