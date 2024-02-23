import React, { useState } from "react";
import "../../scss/_WhoWeHelp.scss";
import decoration_img from "../../assets/Decoration.svg";

const WhoWeHelp = () => {
  const [selectedCategory, setSelectedCategory] = useState("fundacje");
  const [currentPage, setCurrentPage] = useState(1);

  const organizationsData = {
    fundacje: {
      pages: 3,
      entriesPerPage: 3,
      description:
        "W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego dokładnie potrzebują.",
      data: [
        {
          name: "Fundacja “Dbam o Zdrowie”",
          items: ["ubrania", "jedzenie", "sprzęt AGD", "meble", "zabawki"],
          mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        },
        {
          name: "Fundacja “Dla dzieci”",
          items: ["ubrania", "meble", "zabawki"],
          mission: "Pomoc dzieciom z ubogich rodzin.",
        },
        {
          name: "Fundacja “Dla dzieci”",
          items: ["ubrania", "meble", "zabawki"],
          mission: "Pomoc dzieciom z ubogich rodzin.",
        },
        {
          name: "Fundacja “Dla dzieci”",
          items: ["ubrania", "meble", "zabawki"],
          mission: "Pomoc dzieciom z ubogich rodzin.",
        },
        {
          name: "Fundacja “Dla kogos”",
          items: ["ubrania", "meble", "zabawki"],
          mission: "Pomoc dzieciom z ubogich rodzin.",
        },
        {
          name: "Fundacja “Bez domu”",
          items: ["ubrania", "jedzenie", "ciepłe koce"],
          mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
        },
        {
          name: "Fundacja “Dla domu”",
          items: ["ubrania", "meble", "zabawki"],
          mission: "Pomoc dzieciom z ubogich rodzin.",
        },
        {
          name: "Fundacja “Dla dzieci”",
          items: ["ubrania", "meble", "zabawki"],
          mission: "Pomoc dzieciom z ubogich rodzin.",
        },
        {
          name: "Fundacja “Dla dzieci”",
          items: ["ubrania", "meble", "zabawki"],
          mission: "Pomoc dzieciom z ubogich rodzin.",
        },
      ],
    },
    organizacje: {
      pages: 2,
      entriesPerPage: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      data: [
        {
          name: "Organizacja “Lorem Ipsum 1”",
          items: ["ubrania", "jedzenie", "sprzęt AGD", "meble", "zabawki"],
          mission:
            "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        },
        {
          name: "Organizacja “Lorem Ipsum 2”",
          items: ["ubrania", "meble", "zabawki"],
          mission:
            "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        },
        {
          name: "Organizacja “Lorem Ipsum 3”",
          items: ["ubrania", "jedzenie", "ciepłe koce"],
          mission: "Scelerisque in dictum non consectetur a erat nam.",
        },
        {
          name: "Organizacja “Lorem Ipsum 3”",
          items: ["ubrania", "jedzenie", "ciepłe koce"],
          mission: "Scelerisque in dictum non consectetur a erat nam.",
        },
        {
          name: "Organizacja “Lorem Ipsum 2”",
          items: ["ubrania", "meble", "zabawki"],
          mission:
            "Hendrerit gravida rutrum quisque non tellus orci ac auctor augue.",
        },
        {
          name: "Organizacja “Lorem Ipsum 1”",
          items: ["ubrania", "jedzenie", "sprzęt AGD", "meble", "zabawki"],
          mission:
            "Quis varius quam quisque id diam vel quam elementum pulvinar.",
        },
      ],
    },
    lokalneZbiorki: {
      pages: 1,
      entriesPerPage: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      data: [
        {
          name: "Fundacja “Dbam o Zdrowie”",
          items: ["ubrania", "jedzenie", "sprzęt AGD", "meble", "zabawki"],
          mission: "Pomoc osobom znajdującym się w trudnej sytuacji życiowej.",
        },
        {
          name: "Fundacja “Dla dzieci”",
          items: ["ubrania", "meble", "zabawki"],
          mission: "Pomoc dzieciom z ubogich rodzin.",
        },
        {
          name: "Fundacja “Bez domu”",
          items: ["ubrania", "jedzenie", "ciepłe koce"],
          mission: "Pomoc dla osób nie posiadających miejsca zamieszkania.",
        },
      ],
    },
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentCategoryData = organizationsData[selectedCategory];
  const totalPages = currentCategoryData.pages;
  const currentPageData = currentCategoryData.data.slice(
    (currentPage - 1) * currentCategoryData.entriesPerPage,
    currentPage * currentCategoryData.entriesPerPage
  );

  const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      onClick={() => handlePageChange(index + 1)}
      className={
        currentPage === index + 1 ? "active-pagination" : "button-pagination"
      }
    >
      {index + 1}
    </button>
  ));

  return (
    <section className="whowehelp" id="whowehelp">
      <div className="whowehelp-container">
        <h1>Komu pomagamy?</h1>
        <img
          src={decoration_img}
          alt="decoration icon"
          className="decoration_img"
        />
        <div className="buttons">
          <button
            className={`button ${
              selectedCategory === "fundacje" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("fundacje")}
          >
            Fundacje
          </button>
          <button
            className={`button ${
              selectedCategory === "organizacje" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("organizacje")}
          >
            Organizacje
          </button>
          <button
            className={`button ${
              selectedCategory === "lokalneZbiorki" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("lokalneZbiorki")}
          >
            Lokalne zbiórki
          </button>
        </div>
        <p className="whowehelp-description">
          {organizationsData[selectedCategory].description}
        </p>

        <ul className="helpers">
          {currentPageData.map((fundacja, index) => (
            <div className="helpers-list" key={index}>
              <div>
                <li>{fundacja.name}</li>
                <p>Cel i misja: {fundacja.mission}</p>
              </div>
              <p>{fundacja.items.join(", ")}</p>
            </div>
          ))}
        </ul>
        <div className="pagination">{paginationButtons}</div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
