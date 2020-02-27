import React from "react";

const MainNav = () => {
	return (
		<nav className="main-nav main-nav--header">
			<div className="main-nav__btn" aria-label="Показать меню">
				<span className="main-nav__line main-nav__line--1"></span>
				<span className="main-nav__line main-nav__line--2"></span>
				<span className="main-nav__line main-nav__line--3"></span>
				<span className="main-nav__line main-nav__line--4"></span>
				<span className="main-nav__line main-nav__line--5"></span>
			</div>
			<ul className="main-nav__list nojs">
				<li className="main-nav__list-item main-nav__list-item--here">
					<a href="#" className="main-nav__list-link main-nav__list-link--here"> 
					Home
					</a>
				</li>
				<li className="main-nav__list-item">
					<a href="#" className="main-nav__list-link"> 
						About Us
					</a>
				</li>
				<li className="main-nav__list-item main-nav__list-item--can-open">
					<a href="#" className="main-nav__list-link"> 
						Services
					</a>
				</li>
				<li className="main-nav__list-item">
					<a href="#" className="main-nav__list-link"> 
						Careers
					</a>
				</li>
				<li className="main-nav__list-item">
					<a href="#" className="main-nav__list-link"> 
						News
					</a>
				</li>
				<li className="main-nav__list-item">
					<a href="#" className="main-nav__list-link">
						Documentation
					</a>
				</li>
			</ul>
		</nav>
	)
};




export default MainNav;