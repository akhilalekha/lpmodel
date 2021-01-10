import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Featured.module.css";
import { v4 as uuidv4 } from "uuid";
import img1 from "../images/bluesurf.jpg";
import img2 from "../images/domeblue.jpg";
import img3 from "../images/sanddunes.jpg";

function Featured() {
	const images = [img1, img2, img3];
	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 1000,
		swipeToSlide: true,
		autoplay: true,
		autoplaySpeed: 4000,
		cssEase: "linear",
		pauseOnHover: true
	};
	return (
		<div className={style.Featured}>
			<div className={style.featureContainer}>
				<div className={style.ftrText}>
					<h3 className={style.ftrTitle}>Featured Stories</h3>
					<p className={style.ftrDes}>
						At iam decimum annum in spelunca iacet. Cur tantas regiones
						barbarorum pedibus obiit, tot maria transmisit.
					</p>
				</div>
				<div className={style.ftrSlider}>
					<Slider {...settings}>
						{images.map((image) => (
							<div className={style.ftrImageContainer} key={uuidv4()}>
								<img className={style.ftrImage} src={image} alt="slider" />
							</div>
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
}

export default Featured;
