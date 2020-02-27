import React from "react";

const Logo = () => {
	return (
		<div className="logo logo--header logo--footer">
			<a href="#" className="logo__link">
				<img className="logo__img" src="assets/img/logo.svg" alt="Логотип компании"></img>
				<img className="logo__img" src="assets/img/title.svg" alt="Название компании"></img>
			</a>
		</div>
	)
};

export default Logo;