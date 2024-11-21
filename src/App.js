import React, { Component } from "react";
import Selector from "./components/selector/selector";
import "./App.css";

class App extends Component {
	state = {
		selectorState: {
			selectedOption: "Выберите опцию",
			options: ["Сертификат на 50000 руб", "Сертификат на 20000 руб", "Сертификат на 10000 руб", "Сертификат на 5000 руб"],
			isOpen: false,
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

	render() {
		return (
			<div className='App'>
				<div className='container'>
					<Selector
						toggleOptions={this.toggleOptions}
						handleOptionClick={this.handleOptionClick}
						selectorState={this.state.selectorState}
						updateSelectorState={this.updateSelectorState}
					/>
				</div>
			</div>
		);
	}
}

export default App;
