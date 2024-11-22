import React, { useEffect, useState } from "react";
import "./Modal.css";

const Modal = ({ product, onClose }) => {
	const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

	const handleOutsideClick = (e) => {
		if (e.target.classList.contains("modal")) {
			onClose();
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleOutsideClick);

		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	const toggleDescription = () => {
		setIsDescriptionExpanded((prev) => !prev);
	};

	return (
		<div className='modal'>
			<div className='modal__content'>
				<button
					className='modal__close'
					onClick={onClose}>
					&times;
				</button>
				<img
					src={product.image}
					alt={product.name}
					className='modal__image'
				/>
				<div className='modal__text'>
					<h3 className='modal__title'>{product.name}</h3>
					<p className='modal__description'>
						{isDescriptionExpanded
							? product.description
							: product.description.slice(0, 100) + "..."}{" "}
						<span
							className='modal__expand'
							onClick={toggleDescription}>
							{isDescriptionExpanded ? "Свернуть" : "Развернуть"}
						</span>
					</p>
					<p className='modal__price'>
						Цена: <strong>{product.price} руб</strong>
					</p>
					<button
						className='modal__button'
						onClick={onClose}>
						Купить
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
