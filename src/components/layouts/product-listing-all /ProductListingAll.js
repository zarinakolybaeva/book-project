//in book page
import React from 'react';
import './productListingAll.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import {BookData} from '../../../mockData';

const ProductListingAll=()=>{
    // console.log(BookData);
    return (
        <section className="product-listing-all-container">
            <div className="container">

                <div className="grid-container">
                {BookData.map((book)=>{
                    return(
                        <div key={book.id} className="grid-item">
                                <ProductListingCard BookData={book}/>
                            </div>
                    )
                })}
            </div>
            </div>
        </section>
    )
}
export default ProductListingAll;
