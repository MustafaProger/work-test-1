import React from "react";
import "./Card.css";

const Card = ({ product, onCardClick }) => {
	return (
		<div
			className='card'
			onClick={() => onCardClick(product)}>
			<div class='card__img'>
				<img
					src={product.image}
					alt={product.name}
					className='img'
				/>
			</div>
			<div className='card__desr'>
				<h3 className='card__title'>{product.name}</h3>
				<p className='card__nominal'>Номинал</p>
				<p className='card__price'>{product.price} руб</p>
				<button className='card__button'>Купить</button>
			</div>
		</div>
	);
};

export default Card;
