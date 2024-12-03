import React from "react";
import './ProductListingCard.styles.css';
import ProductImage from '../../../assets/books-images/dor.jpg';
// import SearchInputForm from "../../form/searchinputform/SearchInputForm";
import { BookData } from "../../../mockData";
import { Link } from "react-router-dom";


const ProductListingCard=({BookData})=>{
    return(
        <div className="listing-container">
                    <div className="product-listing-card">
                        <div className="product-listing-img-container">
                            <img src={BookData.book_url} alt="product-listing-img" className="product-listing-img" /> 
                        </div>
                        <div className="product-listing-details-container">
                            <h3>{BookData.book_name} </h3>
                            <p className="author-name">{BookData.author_name}</p>
                            <p className="pricing"> {BookData.price} &#8376;</p>
                        </div>
                        <div className="card-button-container">
                        <Link to={`/book-details/${BookData.id}`} className="product-listing-button">Details</Link>
                        </div>
                    </div>
                </div>
    )
}

export default ProductListingCard;
