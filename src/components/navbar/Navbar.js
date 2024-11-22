import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	return (
		<nav className='navbar'>
			<div className='navbar-container'>
				<a
					href='/'
					className='navbar-brand'>
					<img
						src={logo}
						alt='Logo'
						className='navbar-logo'
					/>
				</a>
				<button
					className='navbar-toggle'
					onClick={toggleNav}>
					☰
				</button>
				<div className={`navbar-collapse ${isNavOpen ? "open" : ""}`}>
					<form className='navbar-form'>
						<input
							type='search'
							placeholder='Название сертификата'
							className='navbar-search-input'
						/>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
