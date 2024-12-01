import React from "react";
import Navbar from '../../components/layouts/navbar/Navbar';
import SearchInputForm from '../../components/form/searchinputform/SearchInputForm';
import './booksPage.styles.css';
import ProductListingAll from "../../components/layouts/product-listing-all/ProductListingAll";
import Footer from '../../components/layouts/footer/footer';

const BooksPage=()=>{
    return(
        <div>
            <Navbar darkTheme={true}/>

            <div className="search-container">
                <h2>Find the <span className="text-primary">Books</span>  that you want</h2>
                <SearchInputForm darkTheme={false}/>
            </div>

            <ProductListingAll />
            <Footer/>
        </div>
    )
}

export default BooksPage;