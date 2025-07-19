import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import { portfolioItems as latestPortfolioItems } from "./PortfolioData";
import Spacer from "../../Spacer";

const Portfolio = () => {
  const [items, setItems] = useState([]);
  const CURRENT_VERSION = "v3"; // version to refresh localStorage

  const itemsPerRow = 3;
  const rowHeight = 400;
  const totalItems = items.length;
  const rows = Math.ceil(totalItems / itemsPerRow);

  useEffect(() => {
    const storedVersion = localStorage.getItem("portfolioVersion");
    const storedItems = localStorage.getItem("portfolioItems");

    if (storedItems) {
      setItems(JSON.parse(storedItems));
    } else {
      setItems(latestPortfolioItems);
      localStorage.setItem("portfolioItems", JSON.stringify(latestPortfolioItems));
      localStorage.setItem("portfolioVersion", CURRENT_VERSION);
    }

    if (storedVersion !== CURRENT_VERSION) {
      localStorage.setItem("portfolioItems", JSON.stringify(latestPortfolioItems));
      localStorage.setItem("portfolioVersion", CURRENT_VERSION);
    }
  }, []);

  return (
    <>
      <section
        id="portfolio"
        style={{
          width: "100%",
          minHeight: `${(rows + 1) * rowHeight + 100}px`, // one extra row
          padding: "60px 40px",
          backgroundColor: "#12071f",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "3rem",
            marginBottom: "40px",
          }}
        >
          My Projects
        </h1>

        {/* Actual portfolio grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
          }}
        >
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        {/* Spacer to push dummy card to next row */}
        <div style={{ height: "30px" }} />

        {/* Dummy card on next row centered */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <PortfolioCard
            item={{
              id: "dummy",
              title: "Coming Soon",
              description: "More exciting projects are currently in progress...",
              image: "/construction.png", 
              bgColor: "transparent",
              link: null,
              source: null,
            }}
          />
        </div>
      </section>

      <Spacer height="100px" />
    </>
  );
};

export default Portfolio;
