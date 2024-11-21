import { Component } from "react";
import './buy.css'

class Buy extends Component {
	render() {
		const { priceProduct } = this.props;
        const chosenProduct = typeof priceProduct() === 'number' ? 'active' : '';

        // console.log(chosenProduct);
        console.log(typeof priceProduct());

		return (
			<div className={`buy ${chosenProduct}`}>
				<div className='buy__price'>
					Цены - <strong>{priceProduct()} руб</strong>
				</div>
				<div className='buy__btn'>
					<button
						type='submit'
						className='btn'>
						Купить
					</button>
				</div>
			</div>
		);
	}
}

export default Buy;
