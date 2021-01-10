import React from "react";
import style from "./Inspirations.module.css";
import insimgs from "./insimgs";
import { v4 as uuidv4 } from "uuid";

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
				<div className={style.insImages}>
					{insimgs.map((item) => (
						<div className={style.insImgContainer} key={uuidv4()}>
							<img className={style.insImg} src={item.img} alt="inspiration" />
							<div className={style.insImgText}>
								<p className={style.insImgTextTitle}>AT IAM DECIMUM</p>
								<p className={style.insImgTextDes}>Regiones barbarorum</p>
								<div className={style.insImgTextHeads}>
									{item.heads.map((head) => (
										<img
											className={style.insImgTextHead}
											src={head}
											alt="head"
											key={uuidv4()}
										/>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Inspirations;
