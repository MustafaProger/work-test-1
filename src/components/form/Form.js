import React, { Component } from "react";
import { Link } from "react-router-dom";
import validation from "./validation";
import phoneInput from "./phoneInput";
import "./Form.css";

class Form extends Component {
	handleSubmit = (event) => {
		event.preventDefault();

		validation(document.querySelector(".form"), "#name", "#phone", "#email");
	};

	handleFloatingLabel() {
		const labels = document.querySelectorAll(".form__label");
		const inputs = document.querySelectorAll(".form__group input");

		inputs.forEach((input, index) => {
			input.addEventListener("input", () => {
				const label = labels[index]; // Связываем конкретный инпут с его лейблом
				if (input.value !== "") {
					label.style.cssText =
						"font-size: 14px; transform: translateY(-125%);";
				} else {
					label.style.cssText = ""; // Возвращаем лейбл в исходное положение, если инпут пустой
				}
			});
		});
	}

	// Вызов метода после первого рендера компонента
	componentDidMount() {
		this.handleFloatingLabel(); // Вызываем функцию плавающих лейблов
		phoneInput();
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
							id='phone'
							data-tel-input
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
			</form>
		);
	}
}

export default Form;
