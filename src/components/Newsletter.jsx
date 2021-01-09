import React from "react";
import Button from "react-bootstrap/Button";
import style from "./Newsletter.module.css";

function Newsletter() {
	return (
		<div className={style.Newsletter}>
			<div className={style.nwsContainer}>
				<div className={style.nwsText}>
					<h2 className={style.nwsTitle}>Sign Up Our Newsletter</h2>
					<p className={style.nwsDes}>
						At iam decimum annum in spelunca iacet. Cur tantas regiones
						barbarorum pedibus obiit, tot maria transmisit.
					</p>
				</div>
				<div className={style.nwsForm}>
					<form>
						<input type="text" name="" id="" placeholder="Name" />
						<input type="email" name="" id="" placeholder="Email" />
						<input type="number" name="" id="" placeholder="Phone Number" />
					</form>
					<Button className={style.signupButton}>SIGN UP NOW</Button>
				</div>
			</div>
		</div>
	);
}

export default Newsletter;
