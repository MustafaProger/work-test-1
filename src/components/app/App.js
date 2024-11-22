import React, { Component } from "react";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import "./App.css";

import vkusvill from '../../assets/img/vkusvill.jpg'
import mvideo from '../../assets/img/mvideo.jpg';
import wink from '../../assets/img/wink.jpg';
import khasl from '../../assets/img/khasl.png';
import aldarado from '../../assets/img/aldarado.jpg';
import chitaiGorod from '../../assets/img/chitai-gorod.png';
import Navbar from "../navbar/Navbar";


class App extends Component {
  state = {
    products: [
      {
        id: 1,
        name: "ВкусВилл",
        price: 1000,
        description: "ВкусВилл – интернет-магазин и розничная сеть супермаркетов продуктов для здорового питания.",
        image: vkusvill,
      },
      {
        id: 2,
        name: "М.Видео",
        price: 10000,
        description: "М.видео — лидер по продаже электроники и бытовой техники среди розничных сетей России. По всем вопросам вы сможете обратиться в нашу службу поддержи на почту support@giftery.ru и по телефону 8-800-700-90-90.",
        image: mvideo,
      },
      {
        id: 3,
        name: "Wink",
        price: 500,
        description: "Wink – умный развлекательный видеосервис. Тысячи фильмов, сериалов и сотни ТВ-каналов на любой вкус в высоком качестве. Тариф «Wink» включает в себя: от 120 ТВ-каналов на любой вкус 27 000 фильмов, сериалов и мультфильмов.",
        image: wink,
      },
      {
        id: 4,
        name: "Хасл",
        price: 5000,
        description: "Хасл – твой надежный партнер в мире спортивной моды.В нашем широком ассортименте: кроссовки, ботинки, одежда ведущих брендов Nike, Adidas, Reebok и других.Бесплатная доставка и оплата при получении.Выгодные скидки:регулярные акции и распродажи!",
        image: khasl,
      },
      {
        id: 5,
        name: "Эльдорадо",
        price: 15000,
        description: "Эльдорадо — лидер по продаже электроники и бытовой техники среди розничных сетей России. По всем вопросам вы сможете обратиться в нашу службу поддержи на почту support@giftery.ru и по телефону 8-800-700-90-90.",
        image: aldarado,
      },
      {
        id: 6,
        name: "Читай город",
        price: 500,
        description: "«Читай-город» – российская федеральная розничная сеть книжных магазинов и крупный интернет-магазин книг. В нём вы можете заказывать книги в любое время 24 часа в сутки. Если хотите угадать с подарком, выберите наш электронный сертификат!",
        image: chitaiGorod,
      },
    ],
    selectedProduct: null,
    isModalOpen: false,
  };

  openModal = (product) => {
    this.setState({ selectedProduct: product, isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ selectedProduct: null, isModalOpen: false });
  };

  render() {
    const { products, selectedProduct, isModalOpen } = this.state;

    return (
      <div className="App">
        <div className="container">
          <Navbar/>
          <h1 style={{fontSize: 40, textAlign: "center", marginBottom: "50px"}}>Подарочные сертификаты</h1>
          <div className="cards">
            {products.map((product) => (
              <Card
                key={product.id}
                product={product}
                onCardClick={this.openModal}
              />
            ))}
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