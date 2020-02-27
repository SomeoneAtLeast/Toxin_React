import React from "react";

import Logo from "./../logo/logo.js";
import MainNav from "./../main-nav/main-nav.js";
import LoginReister from "./../login-register/login-register.js";

const Header = () => {
	return (
	<header className="main-header main-header--margin">
		<div className="main-header__wrapper">
			<Logo />
			<MainNav />
			<LoginReister />
		</div>
	</header>	
	)
};

export default Header;