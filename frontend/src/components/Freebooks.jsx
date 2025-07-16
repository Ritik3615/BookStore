import React from "react";
import Cards from "./Card";
import list from "../../public/List.json"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Freebooks() {
  const filteredBooks = list.filter((data) => data.category === "Free");
  console.log(filteredBooks);

  /*
  // Responsiveness using slick 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  */
  return (
    <>
      <div className="mt-10 text-xl">
        <h1>Free Offered Courses</h1>
      </div>
      <div className="overflow-x-auto ">
        <div className="grid grid-flow-col md:auto-cols-[calc(100%/3)] col-span-1 gap-3 lg:col-span-2">
          {filteredBooks.map((item) =>(
            <Cards item = {item} key={item.id} />
          ))}
        </div>
      </div>

      {/* /* */}
      {/* <div className="slider-container">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
      </div>
      */}
    </>
  );
}

export default Freebooks;
