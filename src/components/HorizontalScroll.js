import React, { useEffect, useRef } from 'react';
import './HorizontalScroll.css';

const HorizontalScroll = ({ items }) => {
    const containerRef = useRef(null);

    // Scroll step in pixels
    const scrollStep = 1;

    // Total width of the scrollable area
    let totalWidth = 0;

    useEffect(() => {
        if (containerRef.current) {
            // Calculate total width of all items
            // eslint-disable-next-line react-hooks/exhaustive-deps
            totalWidth = containerRef.current.scrollWidth;

            // Start the animation loop
            const animateScroll = () => {
                if (containerRef.current) {
                    containerRef.current.scrollTo({
                        left: (containerRef.current.scrollLeft + scrollStep) % totalWidth,
                        behavior: 'smooth',
                    });
                }
            };

            const animationInterval = setInterval(animateScroll, 50); // Adjust interval for smoothness

            return () => clearInterval(animationInterval); // Clean up interval on unmount
        }
    }, []);

    return (
        <div className="horizontal-scroll-container" ref={containerRef}>
            {items.map((item, index) => (
                <div className="item" key={index}>
                    {item}
                </div>
            ))}
        </div>
    );
};

export default HorizontalScroll;