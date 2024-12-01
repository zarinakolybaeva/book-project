import React from "react";
import Showcase from "../../components/layouts/showcase/Showcase";
import ProductListing from "../../components/layouts/productListing/ProductListing";
import Footer from "../../components/layouts/footer/footer";

const HomePage=()=>{
    return(
        <section>
            <Showcase/>
            <ProductListing/>
            <Footer/>
        </section>
    )
}

export default HomePage;