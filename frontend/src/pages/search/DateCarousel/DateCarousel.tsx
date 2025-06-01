import React, { useState, useRef, useEffect } from 'react';
import useWindowDimensions from '../../../functions/useWindowDimensions.tsx';
import './datecarousel.css';

interface DateCarouselProps {
    selectedDate?: string;
    onDateSelect?: (isoDate: string) => void;
}

const DateCarousel: React.FC<DateCarouselProps> = ({ selectedDate, onDateSelect }) => {

    const { width, height } = useWindowDimensions();
    const totalDays = 15;
    const centerIndex = Math.floor(totalDays / 2);
    const today = new Date();

    const dates = Array.from({ length: totalDays }, (_, i) => {
        const d = new Date(today);
        // Negative diff for days before, positive for days after
        const diff = i - centerIndex;
        d.setDate(today.getDate() + diff);
        return d;
    });

    const isoDay = selectedDate?.slice(0, 10);
    const foundIndex = dates.findIndex(d => d.toISOString().slice(0, 10) === isoDay);
    const [activeIndex, setActiveIndex] = useState<number>(
        foundIndex >= 0 ? foundIndex : centerIndex
    );

    // const [activeIndex, setActiveIndex] = useState(Math.floor(totalDays / 2));
    const carouselRef = useRef<HTMLDivElement>(null);

    // These values must match the css.
    var containerWidth = width - (Math.max(20, (0.05*width))*2) - 20; // Width of the .carousel-container
    const itemWidth = 80;       // Width of each .date-item

    if(width < 400){
        containerWidth = 300;
    }
    else if(width > 500){
        containerWidth = 450;
    }

    useEffect(() => {
        if (carouselRef.current) {
        const scrollLeft =
            activeIndex * itemWidth - (containerWidth / 2 - itemWidth / 2);
        carouselRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' });
        }
    }, [activeIndex, containerWidth, itemWidth]);

    return (
        <div className="date-carousel">
        <div className="carousel-container" ref={carouselRef}>
            <div className="carousel-inner">
                {dates.map((date, index) => {
                    const dayOfWeek = date
                    .toLocaleDateString('en-US', { weekday: 'short' })
                    .toUpperCase();
                    const monthDay = date
                    .toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
                    .toUpperCase();
                    const isActive = index === activeIndex;
                    return (
                        <div
                            key={index}
                            className={`date-item ${isActive ? 'active' : ''}`}
                            onClick={() => {
                                setActiveIndex(index);
                                const iso = date.toISOString();
                                onDateSelect?.(iso);
                            }}
                        >
                            <div className="day-of-week">{dayOfWeek}</div>
                            <div className="month-day">{monthDay}</div>
                        </div>
                    );
                })}
            </div>
        </div>
        </div>
    );
};

export default DateCarousel;
