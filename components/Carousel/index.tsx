import React, { useState, Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const carouselSettings = {
    responsive: {
        0: { items: 1 },
        1024: { items: 4 },
    },
    mouseTrackingEnabled: false,
    dotsDisabled: true,
    mouseDragEnabled: false,
    autoHeight: false,
    buttonsDisabled: true,
    startIndex: 0,
};
export const Carousel: React.FunctionComponent = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const slideNext = () => {
        setCurrentIndex(currentIndex + 1)
    }

    const slidePrev = () => {
        setCurrentIndex(currentIndex - 1)
    }


    return (
        <Fragment>
            <AliceCarousel {...carouselSettings} slideToIndex={currentIndex}>
                {children}
            </AliceCarousel>

            <button onClick={slidePrev} >Prev Page</button>
            <button onClick={slideNext}>Next Page</button>
        </Fragment>
    );
}
