import React from "react";

const LoginRegister = () => {
	return (
		<div className="login-register login-register--header login-register--nojs">
			<div className="login-register__wrapper">
				<a className="login-register__login" href="#">
					<div className="login-register__login-overlay"> 
						Login
					</div>	
				</a>	
				<a className="login-register__register" href="#"> 
					Register
				</a>
			</div>
		</div>
	)
};

export default LoginRegister;