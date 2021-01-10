import React from "react";
import "./Download.css";
import img from "../images/mobile-img2.jpg";
import apl from "../images/apple-app-store.jpg";
import gpl from "../images/google-play.jpg";

function Download() {
	return (
		<div className="Download">
			<div className="dImg">
				<img src={img} alt="mobile screen" />
			</div>

			<div className="dContent">
				<h3 className="dTitle">Download Our App</h3>
				<p className="dDes">
					At iam decimum annum in spelunca iacet. Cur tantas barbarorum pedibus
					obiit, tot maria transmisit.
				</p>
				<div className="dBtns">
					<a href="https://www.apple.com/in/app-store/">
						<img className="dBtn1" src={apl} alt="download" />
					</a>
					<a href="https://play.google.com/store">
						<img className="dBtn1" src={gpl} alt="download" />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Download;
