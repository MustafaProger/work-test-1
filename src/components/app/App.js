import React, { Component } from "react";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import Navbar from "../navbar/Navbar";

import "./App.css";

import vkusvill from "../../assets/img/vkusvill.jpg";
import mvideo from "../../assets/img/mvideo.jpg";
import wink from "../../assets/img/wink.jpg";
import khasl from "../../assets/img/khasl.png";
import aldarado from "../../assets/img/aldarado.jpg";
import chitaiGorod from "../../assets/img/chitai-gorod.png";
import litres from '../../assets/img/litres.jpg'
import perecrectok from '../../assets/img/perecrectok.jpg'
import tefal from '../../assets/img/tefal.png'



class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "ВкусВилл",
        price: 1000,
        description:
          "ВкусВилл – интернет-магазин и розничная сеть супермаркетов продуктов для здорового питания.",
        image: vkusvill,
      },
      {
        id: 2,
        name: "М.Видео",
        price: 10000,
        description:
          "М.видео — лидер по продаже электроники и бытовой техники среди розничных сетей России. По всем вопросам вы сможете обратиться в нашу службу поддержи на почту support@giftery.ru и по телефону 8-800-700-90-90.",
        image: mvideo,
      },
      {
        id: 3,
        name: "Wink",
        price: 500,
        description:
          "Wink – умный развлекательный видеосервис. Тысячи фильмов, сериалов и сотни ТВ-каналов на любой вкус в высоком качестве. Тариф «Wink» включает в себя: от 120 ТВ-каналов на любой вкус 27 000 фильмов, сериалов и мультфильмов.",
        image: wink,
      },
      {
        id: 4,
        name: "Хасл",
        price: 5000,
        description:
          "Хасл – твой надежный партнер в мире спортивной моды.В нашем широком ассортименте: кроссовки, ботинки, одежда ведущих брендов Nike, Adidas, Reebok и других.Бесплатная доставка и оплата при получении.Выгодные скидки:регулярные акции и распродажи!",
        image: khasl,
      },
      {
        id: 5,
        name: "Эльдорадо",
        price: 15000,
        description:
          "Эльдорадо — лидер по продаже электроники и бытовой техники среди розничных сетей России. По всем вопросам вы сможете обратиться в нашу службу поддержи на почту support@giftery.ru и по телефону 8-800-700-90-90.",
        image: aldarado,
      },
      {
        id: 6,
        name: "Читай город",
        price: 500,
        description:
          "«Читай-город» – российская федеральная розничная сеть книжных магазинов и крупный интернет-магазин книг. В нём вы можете заказывать книги в любое время 24 часа в сутки. Если хотите угадать с подарком, выберите наш электронный сертификат!",
        image: chitaiGorod,
      },
      {
        id: 7,
        name: "Литрес",
        price: 300,
        description:
          "На выбранную вами сумму счастливый обладатель сертификата сможет пополнить свой счет Литрес и распоряжаться им как угодно: покупать книги или оплатить Абонемент.",
        image: litres,
      },
      {
        id: 8,
        name: "Перекресток",
        price: 2500,
        description:
          "«Перекресток» превращает привычный поход в магазин в увлекательное гастрономическое путешествие. Сторонник здорового питания или ценитель изысканных блюд? Здесь каждый найдет что-то себе по душе!",
        image: perecrectok,
      },
      {
        id: 9,
        name: "Tefal",
        price: 5000,
        description:
          "Официальный интернет-магазин бытовой техники и посуды Tefal в России.Также, на сайте представлены товары брендов Moulinex, Rowenta, Krups, Emsa.",
        image: tefal,
      },
    ],
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

  render() {
    const { products, selectedProduct, isModalOpen, searchValue } = this.state;

    const filteredProducts = this.productAfterSearch(products, searchValue);

    return (
      <div className="App">
        <div className="container">
          <Navbar updateStateSearchValue={this.updateStateSearchValue} />
          <h1
            style={{ fontSize: 40, textAlign: "center", marginBottom: "50px" }}
          >
            Подарочные сертификаты
          </h1>
          <div className="cards">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  product={product}
                  onCardClick={this.openModal}
                />
              ))
            ) : (
              <h1 style={{border: "3px solid #02b5e1", padding: 20}}>Нет сертификатов с название {this.state.searchValue}</h1>
            )}
          </div>
        </div>
        {isModalOpen && (
          <Modal product={selectedProduct} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;