import React,{useState, useEffect, createContext} from "react";
import {Routes, Route} from 'react-router-dom';
import app from "./firebase/Firebase";
import {RecaptchaVerifier, getAuth, onAuthStateChanged} from 'firebase/auth';
import HomePage from "./pages/homepage/HomePage";
import BooksPage from "./pages/bookspage/BooksPage";
import BookDetails from "./pages/bookdetailpage/BookDetails";
import Login from "./pages/loginpage/Login";
import Signup from "./pages/signup-page/Signup";
import SearchPage from "./pages/SearchPage/SearchPage";
import CartPage from "./pages/cartpage/CartPage";
import ScrollToTop from "./components/util/ScrollToTop";

export const UserContext=createContext({});
export const CartContext=createContext([]);

const App=()=>{
    const auth=getAuth(app);
    const [authenticatedUser, setAuthenticatedUser]=useState(null);
    const [cartItems, setCartItems]=useState([]);
    const [totalAmount, setTotalAmount]=useState(0);


    console.log(UserContext);

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setAuthenticatedUser(user);
             }
            else{
                setAuthenticatedUser(null)
            }
        })

    }, [])

    useEffect(()=>{
        let total=0;
        cartItems.forEach((item)=>{
            total=total+parseInt(item.price);
        })
        setTotalAmount(total);
    }, [cartItems])

    return(
        <ScrollToTop>
            <UserContext.Provider value={authenticatedUser}>
            <CartContext.Provider value={{cartItems,totalAmount, setCartItems}}>
            <Routes>
                 <Route path="/" element={<HomePage/>}/>
                 <Route path="/books" element={<BooksPage/>}/>
                 <Route path="/book-details/:id" element={<BookDetails/>}/> 
                 <Route path="/search" element={<SearchPage/>}/>
                 <Route path="/signup" element={<Signup/>}/> 
                 <Route path="/login" element={<Login/>}/> 
                 <Route path="/cart" element={<CartPage/>}/> 
                 
            </Routes>

            </CartContext.Provider>
            
        
        </UserContext.Provider>
        </ScrollToTop>
    )
}

export default App;

