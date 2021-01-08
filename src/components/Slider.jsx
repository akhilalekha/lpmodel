import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./Slider.css";
import imgone from "../images/foggypines.jpg";
import imgtwo from "../images/orangepine.jpg";
function Slider() {
	let images = [imgone, imgtwo];
	const [index, setIndex] = useState(0);

	const slideRight = () => {
		setIndex((index + 1) % images.length); // increases index by 1
	};

	const slideLeft = () => {
		const nextIndex = index - 1;
		if (nextIndex < 0) {
			setIndex(images.length - 1); // returns last index of images array if index is less than 0
		} else {
			setIndex(nextIndex);
		}
	};
	return (
		images.length > 0 && (
			<div className="carouselBox">
				<img className="carousel" src={images[index]} alt="carouselimage" />
				<div className="buttonBox">
					<Button className="leftBtn Btn" onClick={slideLeft}></Button>
					<div className="caption"> vitarum nobis </div>
					<Button className="rightBtn Btn" onClick={slideRight}></Button>
				</div>
			</div>
		)
	);
}

export default Slider;
