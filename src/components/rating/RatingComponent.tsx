// components/Rating.js
import { Star } from 'lucide-react';
import React from 'react';


const Rating = ({ rating }:{rating: number}) => {
    // Create an array with 5 elements to represent each star
    const stars = Array.from({ length: 5 }, (_, index) => index + 1);

    return (
        <div className="flex">
            {stars.map((star) => (
                <span key={star} style={{ position: 'relative' }}>
                    {rating >= star ? (
                        <Star fill="#ffdc00" color="#ffdc00" size={20}/>
                    ) : rating >= star - 0.5 ? (
                        <Star
                            fill="#ffdc00"
                            color="#ffdc00"
                            style={{
                                clipPath: 'inset(0 50% 0 0)' // Clip to show half-filled star
                            }}
                        />
                    ) : (
                        <Star color="#ffdc00" />
                    )}
                </span>
            ))}
        </div>
    );
};

export default Rating;
