import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "../app/App";
import validation from "./validation";
import "./Form.css";

class Form extends Component {

	state = {
		name: "",
		phone: "",
		email: "",
	}

	handleInputChange = (event) => {
		const { id, value } = event.target;
		this.setState({
			[id]: value,
		});
		console.log(value)
	};

	handleSubmit = (event) => {
		event.preventDefault();
		
		// Получаем данные из формы
		const name = this.state.name;
		const phone = this.state.phone;
		const email = this.state.email;
		const { price } = this.props; 
	
		if (!validation(document.querySelector(".form"), "#name", "#phone", "#email")) {
			return; 
		}
	
		const robokassaUrl = `https://auth.robokassa.ru/Merchant/Index.aspx?MerchantLogin=your_login&OutSum=${price}&InvId=${new Date().getTime()}&Desc=${encodeURIComponent('Покупка сертификата')}&Email=${email}&Phone=${phone}&Name=${encodeURIComponent(name)}&SignatureValue=your_signature`;
	
		// Переходим на сайт Robokassa
		window.location.href = robokassaUrl;
	};

	handleFloatingLabel() {
		const labels = document.querySelectorAll(".form__label");
		const inputs = document.querySelectorAll(".form__group input");

		inputs.forEach((input, index) => {
			input.addEventListener("input", () => {
				const label = labels[index]; 
				if (input.value !== "") {
					label.style.cssText =
						"font-size: 14px; transform: translateY(-125%);";
				} else {
					label.style.cssText = ""; 
				}
			});
		});
	}

	componentDidMount() {
		this.handleFloatingLabel(); 
	}

	render() {
		const { product, price } = this.props;

		return (
			<form
				className='form'
				onSubmit={this.handleSubmit} // Обработчик отправки формы
			>
				<div className='form__container'>
					<h3
						style={{
							textAlign: "center",
							marginBottom: 40,
						}}>
						{`Сертификат от "${product}" на ${price} руб`}
					</h3>
					<div className='form__group'>
						<input
							type='text'
							className='form__input'
							id='name'
							value={this.state.name}
							onChange={this.handleInputChange}
						/>
						<label
							htmlFor='name'
							className='form__label'>
							Имя
							<span style={{ color: "orange", fontSize: 20 }}>*</span>
						</label>
					</div>

					<div className='form__group'>
						<input
							type='tel'
							className='form__input'
							maxLength={18}
							id='phone'
							// data-tel-input
							value={this.state.phone}
							onChange={this.handleInputChange}
						/>
						<label
							htmlFor='phone'
							className='form__label'>
							Номер телефона
							<span style={{ color: "orange", fontSize: 20 }}>*</span>
						</label>
					</div>
					<div className='form__group'>
						<input
							type='email'
							className='form__input'
							id='email'
							value={this.state.email}
							onChange={this.handleInputChange}
						/>
						<label
							htmlFor='email'
							className='form__label'>
							Почта
							<span style={{ color: "orange", fontSize: 20 }}>*</span>
						</label>
					</div>

					<div className='form__btns'>
						<Link
							to='/'
							className='modal__button'>
							Назад
						</Link>
						<button
							type='submit'
							className='modal__button'>
							Оформить
						</button>
					</div>
				</div>
				{/* <Routes>
					<Route
						path='/app'
						element={<App />}></Route>
				</Routes> */}
			</form>
		);
	}
}

export default Form;
