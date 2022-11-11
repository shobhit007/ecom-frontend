import "./slider.css";
import { sliderItems } from "../../data/data.js";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlideClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider">
      <div className="arrow left" onClick={() => handleSlideClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div className="slide-wrapper">
        {sliderItems.map((item) => (
          <div
            className="slide"
            key={item.id}
            style={{
              backgroundColor: item.bg,
              transform: `translateX(${slideIndex * -100}vw)`,
            }}
          >
            <div className="image-container">
              <img src={item.img} alt="" className="slide-image" />
            </div>
            <div className="info-container">
              <h1 className="title">{item.title}</h1>
              <p className="desc">{item.desc}</p>
              <button className="btn-show-now">SHOW NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow right" onClick={() => handleSlideClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
}

export default Slider;
