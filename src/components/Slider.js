import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={1500}
        infinite={true}
      >
        <div>
          <img src="/slider1.jpeg" alt="first image" />
        </div>
        <div>
          <img src="/slider2.jpeg" alt="second image" />
        </div>
        <div>
          <img src="/slider3.jpeg" alt="third image" />
        </div>
        <div>
          <img src="/slider1.jpeg" alt="forth image" />
        </div>
        <div>
          <img src="/slider2.jpeg" alt="fifth image" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
