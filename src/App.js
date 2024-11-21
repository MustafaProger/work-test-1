import React, { Component } from "react";
import Selector from "./components/selector/selector";
import "./App.css";
import Buy from "./components/buy/buy";

class App extends Component {
	state = {
		selectorState: {
			selectedOption: "Выберите товар",
			options: [
				"Сертификат на 50000 руб",
				"Сертификат на 20000 руб",
				"Сертификат на 10000 руб",
				"Сертификат на 5000 руб",
			],
			isOpen: false,
		},
		buyState: {
			priceProduct: null,
		},
	};

	toggleOptions = () => {
		this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
	};

	handleOptionClick = (option) => {
		this.setState({ selectedOption: option, isOpen: false });
	};

	updateSelectorState = (newState) => {
		this.setState((prevState) => ({
			selectorState: {
				...prevState.selectorState,
				...newState,
			},
		}));
	};

	updateBuyState = (newState) => {
		this.setState((prevState) => ({
			buyState: {
				...prevState.buyState,
				...newState,
			},
		}));
	};

	returnPriceProduct = () => {
		return this.state.buyState.priceProduct;
	};

	render() {
		return (
			<div className='App'>
				<div className='container'>
					<div className='content'>
						<Selector
							toggleOptions={this.toggleOptions}
							handleOptionClick={this.handleOptionClick}
							selectorState={this.state.selectorState}
							updateSelectorState={this.updateSelectorState}
							updateBuyState={this.updateBuyState}
						/>
						<Buy priceProduct={this.returnPriceProduct} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
