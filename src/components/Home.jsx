import React from "react";
import "./Home.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

function Home() {
	return (
		<div className="Home">
			<div className="homeOverlay"></div>
			<h6 className="logo">MARVEL</h6>
			<div className="homeCol">
				<div className="homeCol1">
					<h1 className="homeTitle">Lorem Ipsum Dolor Sit Amet </h1>
					<div className="homeDes">
						Consequatur, dolores placeat amet consequuntur quis. Lorem ipsum
						dolor sit amet consectetur adipisicing elit. In consequatur eum
						omnis magnam harum iusto vero eius sit sapiente quibusdam nulla a
						illum, quae rem.
					</div>
					<Button className="contactButton" size="lg">
						CONTACT
					</Button>
					<div className="searchContainer">
						<datalist id="suggestions">
							<option>Lorem</option>
							<option>Ipsum</option>
							<option>Dolor</option>
						</datalist>
						<input
							className="search"
							autoComplete="on"
							list="suggestions"
							placeholder="Search"
						/>
					</div>
					<div className="searchIcon"></div>
				</div>
				<div className="homeCol2">
					<Carousel>
						<Carousel.Item>
							<div className="carousel carouselImg1"></div>
						</Carousel.Item>
						<Carousel.Item>
							<div className="carousel carouselImg2"></div>
						</Carousel.Item>
					</Carousel>
				</div>
			</div>
		</div>
	);
}

export default Home;
