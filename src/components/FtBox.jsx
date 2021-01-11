import React from "react";
import style from "./FtBox.module.css";
import { v4 as uuidv4 } from "uuid";
function FtBox({ title, links }) {
	return (
		<div className={style.FtBox}>
			<p className={style.FtBoxTitle}>{title}</p>
			{links.map((link) => (
				<p className={style.FtBoxLink} key={uuidv4()}>
					{link}
				</p>
			))}
		</div>
	);
}

export default FtBox;
