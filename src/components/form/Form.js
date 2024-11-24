import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
	render() {
		return (
			<div className='modal-overlay'>
				<div className='form__container'>
					<div className='form__group'>
						<input
							type='text'
							className='form__input'
							placeholder='Name'
							id='name'
							required
						/>
						<label
							htmlFor='name'
							className='form__label'>
							Name
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
							Email
						</label>
					</div>

					<div className='form__group'>
						<input
							type='text'
							className='form__input'
							placeholder='Subject'
							id='subject'
							required
						/>
						<label
							htmlFor='subject'
							className='form__label'>
							Subject
						</label>
					</div>
				</div>
			</div>
		);
	}
}

export default Form;
