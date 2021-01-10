import React from "react";
import style from "./Footer.module.css";
import FtBox from "./FtBox";
import img1 from "../images/facebook.svg";
import img2 from "../images/linkedin.svg";
import img3 from "../images/twitter.svg";
// import img4 from "../images/Union.svg";

function Footer() {
	const ftrlinks = ["Home", "About Us", "Services", "Packages", "Contact Us"];
	const contact = ["info@companyname.com", "+9884648340"];
	return (
		<div className={style.Footer}>
			<hr />
			<div className={style.ftContainer}>
				<FtBox title="COMPANY" links={ftrlinks} />
				<FtBox title="INFORMATION" links={ftrlinks} />
				<FtBox title="INFORMATION" links={ftrlinks} />
				<FtBox title="CONTACT US" links={contact} />
				<div className={style.ftbanner}>
					<div className={style.ftText1}>
						Terms & conditions | Privacy Policy
					</div>
					<div className={style.ftbannerIcons}>
						<img src={img1} alt="facebook icon" />
						<img src={img2} alt="linkedim icon" />
						<img src={img3} alt="twitter icon" />
						{/* <img src={img4} alt="youtube icon" /> */}
					</div>
					<div className={style.ftText2}>2020. All rights reserved.</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
