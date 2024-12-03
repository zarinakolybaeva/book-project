import React,{useContext} from "react";
import './SearchResultCard.styles.css';
import { Link } from "react-router-dom";
import { BookData } from "../../../mockData";

const SearchResultCard = ({BookData}) => {
    return(
        <section className="cart-item">
            <div className="cart-item-img-container">
                <img src={BookData.book_url} alt="cart-item-img" className="cart-item-img"/>
            </div>
            <div className="cart-item-container">
                <h2>{BookData.book_name}</h2>
                <p>{BookData.author_name}</p>
                
                <Link to={`/book-details/${BookData.id}`} className="button-primary">Product Details</Link>
            </div>
        </section>
    )
}

export default SearchResultCard;
