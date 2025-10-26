import { useState } from "react";
import Header from "../components/Molecules/Header/Header";
import { PaginationView } from "../components/Organism/PaginationView/PaginationView";
import { LoadMoreView } from "../components/Organism/LoadMoreView/LoadMoreView";

const HomePage = () => {
  const [view, setView] = useState("page-controls");

  return (
    <div
      className="min-h-screen w-full pb-10 pt-5 transition-colors duration-300"
      style={{
        backgroundColor: view === "page-controls" ? "#e4e9fd" : "#e2fdec",
      }}
    >
      <Header view={view} setView={setView} />
      {view === "page-controls" ? <PaginationView /> : <LoadMoreView />}
    </div>
  );
};

export default HomePage;
