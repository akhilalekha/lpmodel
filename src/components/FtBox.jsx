import React from "react";
import style from "./FtBox.module.css";
function FtBox({ title, links }) {
	return (
		<div className={style.FtBox}>
			<p className={style.FtBoxTitle}>{title}</p>
			{links.map((link) => (
				<p className={style.FtBoxLink}>{link}</p>
			))}
		</div>
	);
}

export default FtBox;
