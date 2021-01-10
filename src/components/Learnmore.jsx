import React from "react";
import Button from "react-bootstrap/Button";
import style from "./Learnmore.module.css";
import img1 from "../images/lrn1.jpg";
import img2 from "../images/lrn2.jpg";
import img3 from "../images/lrn3.jpg";
import img4 from "../images/lrn4.jpg";

function Learnmore() {
	return (
		<div className={style.Learnmore}>
			<div className={style.lrnContent}>
				<h2 className={style.lrnTitle}>Lorem Ipsum Dolor Sit Amet</h2>
				<div className={style.lrndesc}>
					At iam decimum annum in spelunca iacet. Cur tantas regiones barbarorum
					pedibus obiit, tot maria transmisit.
				</div>
				<Button className={style.lrnButton}>LEARN MORE</Button>
			</div>
			<div className={style.lrnImages}>
				<div className={style.lrnImgContainer}>
					<img className={style.lrnImg} src={img1} alt="skydiving" />
				</div>
				<div className={style.lrnImgContainer}>
					<img className={style.lrnImg} src={img2} alt="boatride" />
				</div>
				<div className={style.lrnImgContainer}>
					<img className={style.lrnImg} src={img3} alt="snow trekking" />
				</div>
				<div className={style.lrnImgContainer}>
					<img className={style.lrnImg} src={img4} alt="boat deck" />
				</div>
			</div>
		</div>
	);
}

export default Learnmore;
