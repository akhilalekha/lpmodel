import React from "react";
import style from "./Inspirations.module.css";

function Inspirations() {
	return (
		<div className={style.Inspirations}>
			<div className={style.insContainer}>
				<div className={style.insText}>
					<h2 className={style.insTitle}>Inspirations</h2>
					<p className={style.insDes}>
						At iam decimum annum in spelunca iacet. Cur tantas regiones
						barbarorum pedibus obiit, tot maria transmisit.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Inspirations;
