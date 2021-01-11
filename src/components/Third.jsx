import React from "react";
import Button from "react-bootstrap/Button";
import "./Third.css";
import { v4 as uuidv4 } from "uuid";
import img1 from "../images/thfs1.jpg";
import img2 from "../images/thfs2.jpg";
import img3 from "../images/thfs3.jpg";
import img4 from "../images/thfs4.jpg";

function Third() {
	let images = [img1, img2, img3, img4];
	return (
		<div className="Third">
			<div className="thImg">
				<h2 className="thImgTitle">Lorem Ipsum Dolor Sit Amet</h2>
				<div className="thImgdesc">
					At iam decimum annum in spelunca iacet. Cur tantas regiones barbarorum
					pedibus obiit, tot maria transmisit.
				</div>
				<Button className="contactButton thBtn">CONTACT</Button>
			</div>
			<div className="thFs">
				<div className="thFsContent">
					<h2 className="thFsTitle">Featured Stories</h2>
					{images.map((image) => (
						<div className="thFsSection" key={uuidv4()}>
							<img className="thFsImg" src={image} alt="featured" />
							<div className="thFsStory">
								<p className="thFsDes">
									At iam decimum annum in spelunca iacet.
								</p>
								<p className="thFsDate">18 May 2020</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Third;
