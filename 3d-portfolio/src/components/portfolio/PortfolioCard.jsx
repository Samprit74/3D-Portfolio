import React from "react";
import "./Portfolio.css";

const getTextColor = (bgColor) => {
  if (!bgColor || bgColor === "transparent") return "#fff";
  const color = bgColor.replace("#", "");
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "#000" : "#fff";
};

const PortfolioCard = ({ item }) => {
  const textColor = getTextColor(item.bgColor);

  return (
    <div
      className="portfolio-card"
      style={{
        backgroundColor: item.bgColor || "#1e1e1e",
        color: textColor,
        border: item.bgColor === "transparent" ? "2px dashed #aaa" : "none",
        opacity: item.bgColor === "transparent" ? 0.6 : 1,
      }}
    >
      {item.image && (
        <div className="card-image-container">
          <img src={item.image} alt={item.title} className="card-image" />
        </div>
      )}
      <h3 className="card-title">{item.title}</h3>
      <p className="card-description">{item.description}</p>

      {item.link || item.source ? (
        <div className="card-buttons">
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-button"
              style={{ color: textColor, borderColor: textColor }}
            >
              Live
            </a>
          )}
          {item.source && (
            <a
              href={item.source}
              target="_blank"
              rel="noopener noreferrer"
              className="card-button"
              style={{ color: textColor, borderColor: textColor }}
            >
              Code
            </a>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default PortfolioCard;
