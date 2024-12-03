import React,{useContext} from "react";
import './navbar.styles.css';
import { Link,useNavigate } from 'react-router-dom';
import { UserContext } from "../../../App";
import {ReactComponent as Cart} from '../../../assets/cart.svg';
import { getAuth, signOut } from "firebase/auth";
import app from '../../../firebase/Firebase';

const Navbar=({ darkTheme, darkText})=>{

    const user=useContext(UserContext);
    const auth=getAuth(app);
    const navigate=useNavigate();

    const handleLogout=()=>{
        signOut(auth).then(()=>{
            navigate('/');
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    const showLoginAndSignUp=(
        <nav className="nav-links-container">
                    <Link to="/" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Home</Link>
                    <Link to="/books" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Books</Link>
                    <Link to="/login" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Log In</Link>
                    <Link to="/signup" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Sign up</Link>
     
                    
                </nav>
    )
    const showLogoutAndCart=(
        <nav className="nav-links-container">
                    <Link to="/" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Home</Link>
                    <Link to="/books" className={`${darkText ?'nav-links-dark':'nav-links'}`}>Books</Link>
                    <a onClick={handleLogout} className={`${darkText ?'nav-links-dark':'nav-links'}`}>Log Out</a>
                    <Link to="/cart" className="cartLink"><Cart/></Link>
                    
                </nav>
    )
    

    return(
        <section className={darkTheme? 'background-dark relative' + ' navbar-container' : 'background-transparent' + ' navbar-container'}>
            <div className="container flex justify-between align-center">
                <Link to="/" className="logo">Book<span className="text-primary">Store</span></Link>

                {user? showLogoutAndCart: showLoginAndSignUp}
                
            </div>
        </section>
    )
}

export default Navbar
