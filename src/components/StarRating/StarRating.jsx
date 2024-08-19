import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css"

function StarRating() {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState();
    const noOfStars = 5;

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex);
    }
    function handleMouseMove(getCurrentIndex) {
        setHover(getCurrentIndex);
    }
    function handleMouseLeave(getCurrentIndex) {
        setHover(rating);
    }
    return (
        <div className="star-rating">
            {[...Array(noOfStars)].map((_, index) => {
                index += 1;
                return (
                    <FaStar
                        key={index}
                        className={index <= (hover || rating) ? "active" : "inactive"}
                        onClick={() => handleClick(index)}
                        onMouseMove={() => handleMouseMove(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                        size={40}
                    />
                );
            })}
        </div>
    );
}

export default StarRating;
