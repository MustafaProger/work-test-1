import React, { Component } from "react";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import Navbar from "../navbar/Navbar";

import "./App.css";

// import vkusvill from "../../assets/img/vkusvill.jpg";
// import mvideo from "../../assets/img/mvideo.jpg";
// import wink from "../../assets/img/wink.jpg";
// import khasl from "../../assets/img/khasl.png";
// import aldarado from "../../assets/img/aldarado.jpg";
// import chitaiGorod from "../../assets/img/chitai-gorod.png";
// import litres from '../../assets/img/litres.jpg'
// import perecrectok from '../../assets/img/perecrectok.jpg'
// import tefal from '../../assets/img/tefal.png'

class App extends Component {
	state = {
		products: [],
		loading: true,
		selectedProduct: null,
		isModalOpen: false,
		searchValue: "",
	};

	openModal = (product) => {
		this.setState({ selectedProduct: product, isModalOpen: true });
	};

	closeModal = () => {
		this.setState({ selectedProduct: null, isModalOpen: false });
	};

	updateStateSearchValue = (newSearchValue) => {
		this.setState({ searchValue: newSearchValue });
	};

	productAfterSearch = (items, search) => {
		if (search.length === 0) return items;

		return items.filter((item) => {
			return item.name.toLowerCase().includes(search.toLowerCase());
		});
	};

	delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

	async componentDidMount() {
		// Таймер, чтобы подождать хотя бы 2 секунды перед загрузкой
		await this.delay(1000);  // Задержка 2 секунды (2000 миллисекунд)

		try {
		  const response = await fetch("https://destiny-handy-cover.glitch.me/products");
		  const data = await response.json();
		  this.setState({ products: data, loading: false });  // Сохраняем данные в state
		} catch (error) {
		  console.error("Error:", error);
		  this.setState({ loading: false });  // При ошибке останавливаем индикатор загрузки
		}
	  }

	render() {
		const { products, selectedProduct, isModalOpen, searchValue, loading } =
			this.state;

		const filteredProducts = this.productAfterSearch(products, searchValue);

		if (loading) {
			return (
				<div class='loader-wrapper'>
					<div class='custom-loader'></div>
				</div>
			);
		}

		return (
			<div className='App'>
				<div className='container'>
					<Navbar updateStateSearchValue={this.updateStateSearchValue} />
					<h1
						style={{ fontSize: 40, textAlign: "center", marginBottom: "50px" }}>
						Подарочные сертификаты
					</h1>
					<div className='cards'>
						{filteredProducts && filteredProducts.length > 0 ? (
							filteredProducts.map((product) => (
								<Card
									key={product.id}
									product={product}
									onCardClick={this.openModal}
								/>
							))
						) : (
							<h1 style={{ border: "3px solid #02b5e1", padding: 20 }}>
								Нет сертификатов с названием {this.state.searchValue}
							</h1>
						)}
					</div>
				</div>
				{isModalOpen && (
					<Modal
						product={selectedProduct}
						onClose={this.closeModal}
					/>
				)}
			</div>
		);
	}
}

export default App;
