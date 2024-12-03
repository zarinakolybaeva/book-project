import React, { useState, useEffect } from "react";
import './ProductListing.styles.css';
import ProductListingCard from "../../cards/product-listing-card/ProductListingCard";
import { BookData } from "../../../mockData";

// Function to shuffle an array using Fisher-Yates algorithm
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const ProductListing = () => {
    const [displayedBooks, setDisplayedBooks] = useState([]);

    useEffect(() => {
        // Shuffle the BookData array and update the state every 5 seconds
        const intervalId = setInterval(() => {
            const shuffledBooks = shuffleArray([...BookData]).slice(0, 4);
            setDisplayedBooks(shuffledBooks);
        }, 5000);

        // Clear the interval on component unmount to prevent memory leaks
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array ensures the effect runs only once on mount

    return (
        <div className="product-listing-container">
            <div className="container">
                <h2>Here are some <span className="text-primary">books </span>that you might like</h2>
                <div className="listing-container">
                    {displayedBooks.map((book) => (
                        <ProductListingCard key={book.id} BookData={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductListing;
