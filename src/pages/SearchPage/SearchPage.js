import React, { useState, useEffect } from "react";
import Navbar from "../../components/layouts/navbar/Navbar";
import Footer from "../../components/layouts/footer/footer";
import { useLocation } from "react-router-dom";
import { BookData } from "../../mockData";
import SearchResultCard from "../../components/cards/search-result-card/SearchResultCard";

const SearchPage = () => {
  const location = useLocation();
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    let filteredData = [...BookData];
  
    if (location.state) {
      const { state: searchOptions } = location;
  
      // Apply search query
      if (searchOptions.state) {
        const searchQuery = searchOptions.state.toLowerCase();
        filteredData = filteredData.filter((data) =>
          data.book_name.toLowerCase().charAt(0) === searchQuery
        );
      }
  
      // Apply sorting
      if (searchOptions.sortOrder === "asc") {
        filteredData.sort((a, b) => a.book_name.localeCompare(b.book_name));
      } else if (searchOptions.sortOrder === "desc") {
        filteredData.sort((a, b) => b.book_name.localeCompare(a.book_name));
      }
  
      // Apply genre filtering
      if (searchOptions.filterGenre !== "all") {
        filteredData = filteredData.filter(
          (data) => data.book_genre === searchOptions.filterGenre
        );
      }
  
      // Apply max price filtering
      if (searchOptions.maxPrice) {
        const maxPrice = parseInt(searchOptions.maxPrice);
        filteredData = filteredData.filter((data) => data.price <= maxPrice);
      }
    }
  
    setSearchResult(filteredData);
  }, [location.state, location]);
  

  return (
    <section>
      <Navbar darkTheme={true} />
      <div className="search-result-container">
        <div className="container">
          <h2>Your Search Result</h2>
          {searchResult.length === 0 ? (
            <p>OOPS! There is no such kind of book...</p>
          ) : (
            searchResult.map((result, index) => (
              <SearchResultCard key={index} BookData={result} />
            ))
          )}
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default SearchPage;
