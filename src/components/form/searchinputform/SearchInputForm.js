import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchInputForm.styles.css";

const SearchInputForm = ({ darkTheme }) => {
  const [searchField, setSearchField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterGenre, setFilterGenre] = useState("all");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleSortOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  const handleGenreChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleSearch = () => {
    const searchOptions = {
      state: searchField,
      sortOrder,
      filterGenre,
      maxPrice,
    };

    navigate("/search", { state: searchOptions });
  };

  return (
    <div
      className={`search-input-form-container ${
        darkTheme ? "dark-box-shadow" : "light-box-shadow"
      }`}>
      <input
        type="text"
        className="search-input"
        placeholder="Search Books"
        value={searchField}
        onChange={handleChange}
      />
      <label>
        Sort Order:
        <select value={sortOrder} onChange={handleSortOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </label>
      <label>
        Filter by Genre:
        <select value={filterGenre} onChange={handleGenreChange}>
          <option value="all">All Genres</option>
          <option value="Детская литература">Детская литература</option>
          <option value="Для родителей">Для родителей</option>
          <option value="Мировая классика">Мировая классика</option>
          <option value="Научпоп">Научпоп</option>
          <option value="Поэзия">Поэзия</option>
          <option value="Психология">Психология</option>
          <option value="Сентиментальный роман">Сентиментальный роман</option>
          <option value="Современная мировая проза">Современная мировая проза</option>
          <option value="Фантастика">Фантастика</option>
          <option value="Энциклопедия">Энциклопедия</option>
        </select>
      </label>
      <label>
        Max Price:
        <input type="number" value={maxPrice} onChange={handleMaxPriceChange} />
      </label>
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchInputForm;
