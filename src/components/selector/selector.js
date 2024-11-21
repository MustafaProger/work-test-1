import React, { Component } from "react";
import "./selector.css";

class Selector extends Component {
	componentDidMount() {
		document.addEventListener("click", this.handleOutsideClick);
	}

	componentWillUnmount() {
		document.removeEventListener("click", this.handleOutsideClick);
	}

	handleOutsideClick = (event) => {
		const { isOpen } = this.props.selectorState;
		const { updateSelectorState } = this.props;

		// Проверка: если клик вне селектора
		if (
			isOpen &&
			this.selectorRef &&
			!this.selectorRef.contains(event.target)
		) {
			updateSelectorState({ isOpen: false }); // Закрыть меню
		}
	};

	handleToggle = () => {
		const { selectorState, updateSelectorState } = this.props;
		updateSelectorState({ isOpen: !selectorState.isOpen });
	};

	handleOptionClick = (option) => {
		const { updateSelectorState, updateBuyState } = this.props;
		const price = +option.match(/\d+/)[0];

		updateSelectorState({
			selectedOption: option,
			isOpen: false,
		});

		updateBuyState({
			priceProduct: price - price / 10,
		});
	};

	render() {
		const { selectorState } = this.props;
		const { selectedOption, isOpen, options } = selectorState;

		return (
			<div
				className={`selector ${isOpen ? "open" : ""}`}
				onClick={this.handleToggle}
				ref={(ref) => (this.selectorRef = ref)} // Сохраняем DOM-узел
			>
				<div className='select-value'>{selectedOption}</div>
				<div className='select-arrow'>
					<svg
						height='20'
						width='20'
						viewBox='0 0 20 20'
						aria-hidden='true'
						focusable='false'>
						<path d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'></path>
					</svg>
				</div>
				{isOpen && (
					<ul className='select-options'>
						{options.map((option, index) => (
							<li
								key={index}
								className='select-option'
								onClick={() => this.handleOptionClick(option)}>
								{option}
							</li>
						))}
					</ul>
				)}
			</div>
		);
	}
}

export default Selector;