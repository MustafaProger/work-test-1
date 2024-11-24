import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";

import App from "../app/App";
import "./Form.css";

class Form extends Component {
	render() {
		const { product, price } = this.props;

		return (
			<form
				className='form'
				action='#'>
				<div className='form__container'>
					<h3
						style={{
							textAlign: "center",
							marginBottom: 40,
						}}>{`Сертификат от "${product}" на ${price} руб`}</h3>
					<div className='form__group'>
						<input
							type='text'
							className='form__input'
							placeholder='Имя'
							id='name'
							required
						/>
						<label
							htmlFor='name'
							className='form__label'>
							Имя<span style={{color: 'orange', fontSize: 20}}>*</span>
						</label>
					</div>

					<div className='form__group'>
						<input
							type='tel'
							className='form__input'
							placeholder='Номер телефона'
							id='phone'
							required
						/>
						<label
							htmlFor='phone'
							className='form__label'>
							Номер телефона<span style={{color: 'orange', fontSize: 20}}>*</span>
						</label>
					</div>
					<div className='form__group'>
						<input
							type='email'
							className='form__input'
							placeholder='Email'
							id='email'
							required
						/>
						<label
							htmlFor='email'
							className='form__label'>
							Почты<span style={{color: 'orange', fontSize: 20}}>*</span>
						</label>
					</div>
					<div class='form__btns'>
						<Link
							to='/'
							className='modal__button'>
							Назад
						</Link>
						<Link
							to='https://auth.robokassa.ru/'
							className='modal__button'>
							Оформить
						</Link>
					</div>
				</div>
				{/* <Routes>
          <Route path="/" element={<App/>}/>
        </Routes> */}
			</form>
		);
	}
}

export default Form;
