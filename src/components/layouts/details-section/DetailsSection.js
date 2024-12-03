import React, { useState, useEffect, useContext } from 'react';
import './detailsSection.styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { BookData } from '../../../mockData';
import { CartContext, UserContext } from '../../../App';

const DetailsSection = () => {
    const { id } = useParams();
    const [bookData, setBookData] = useState({});
    const [rating, setRating] = useState(0);
    
    const user = useContext(UserContext);
    const { cartItems, setCartItems } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        let newData = BookData.filter((book) => book.id === parseInt(id));
        setBookData(newData[0]);
        setRating(newData[0].rating);
    }, [id]);

    const handleAddToCart = () => {
        if (user) {
            setCartItems([...cartItems, { ...bookData, rating }]);
            window.alert(`The book "${bookData.book_name}" is added to the cart with a rating of ${rating}`);
        } else {
            navigate('/login');
            alert("Please Login or Sign Up first");
        }
    };

    // const handleRatingChange = (newRating) => {
    //     setRating(newRating);
    // };

    const renderStars = () => {
        const stars = [];
        const staticRating = bookData.rating; // Get the static rating from BookData
    
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    className={`star ${i <= staticRating ? 'filled' : ''}`}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <section className='detail-section-container'>
            <div className='container'>
                <div className='flex-container'>
                    <div className='book-img-container'>
                        <img src={bookData.book_url} alt="book" />
                    </div>
                    <div className='book-detail-container'>
                        <h2>{bookData.book_name}</h2>
                        <p className='text-primary'>{bookData.author_name}</p>
                        <p><b>Жанр</b>: {bookData.book_genre}</p>
                        <div className="rating-container">
                            <p><b>Rating</b>: {renderStars()}</p>
                        </div>
                        <p className='book-description'>{bookData.book_description}</p>
                        <p><b>Language</b>: {bookData.language}</p>
                        <p><b>Length</b>: {bookData.print_length}</p>
                        <h3>{bookData.price}&#8376;</h3>
                        <button onClick={handleAddToCart} className='button-primary'>Add To Cart</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DetailsSection;
