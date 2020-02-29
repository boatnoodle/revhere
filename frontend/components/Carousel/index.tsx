import React, { useState, Fragment } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Styled, { css } from 'styled-components';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
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
  stagePadding: {
    paddingLeft: 0, // in pixels
    paddingRight: 0,
  },
  fadeOutAnimation: true,
};
const baseButtonStyle = css`
  position: absolute;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  top: calc(40% + 0px);
`;
const PreviousButton = Styled(Button)`
    ${baseButtonStyle}
    left:0px;
`;
const NextButton = Styled(Button)`
    ${baseButtonStyle}
    right:0px;
`;
const CarouselContainer = Styled.div`
    position:relative !important;
`;
export const Carousel: React.FunctionComponent = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const slidePrev = () => {
    setCurrentIndex(currentIndex - 1);
  };

  return (
    <CarouselContainer>
      <AliceCarousel {...carouselSettings} slideToIndex={currentIndex}>
        {children}
      </AliceCarousel>
      <PreviousButton onClick={slidePrev}>
        <LeftOutlined />
      </PreviousButton>
      <NextButton onClick={slideNext}>
        <RightOutlined />
      </NextButton>
    </CarouselContainer>
  );
};
<style scoped></style>;
