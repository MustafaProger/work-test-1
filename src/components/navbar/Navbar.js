import React, { Component } from "react";
import logo from "../../assets/logo.svg";
import "./Navbar.css";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
		};
	}

	toggleNav = () => {
		this.setState((prevState) => ({
			isNavOpen: !prevState.isNavOpen,
		}));
	};

	getValueInput = (e) => {
		this.props.updateStateSearchValue(e.target.value);
	};

	render() {
		const { isNavOpen } = this.state;

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
						onClick={this.toggleNav}>
						☰
					</button>
					<div className={`navbar-collapse ${isNavOpen ? "open" : ""}`}>
						<form
							className='navbar-form'
							onChange={this.getValueInput}>
							<input
								type='search'
								placeholder='Название сертификата'
								className='navbar-search-input'
								data-input='1'
							/>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

export default Navbar;
