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
                        <Star fill="#ffffff" color="#ffffff" />
                    ) : rating >= star - 0.5 ? (
                        <Star
                            fill="#ffffff"
                            color="#ffffff"
                            style={{
                                clipPath: 'inset(0 50% 0 0)' // Clip to show half-filled star
                            }}
                        />
                    ) : (
                        <Star color="#ffffff" />
                    )}
                </span>
            ))}
        </div>
    );
};

export default Rating;
