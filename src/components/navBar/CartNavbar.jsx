import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = [
    {
      imgSrc:
        "https://runningwithmiles.boardingarea.com/wp-content/uploads/2015/02/Screen-Shot-2015-02-26-at-3.57.06-PM.png",
      name: "Máy ảnh samsung DSLR 3D",
      price: "2.000.000đ",
      quantity: 2,
      description: "Bạc",
    },
    {
      imgSrc:
        "http://scontent.webpluscnd.net/photos-df/a-0/3764-2194538-1/laptop-asus-gaming-rog-strix-g-g731gth7114t.png?atk=4eb081075dd7d7faad048034c002a610",
      name: "Laptop Asus Gaming ROG Strix",
      price: "29.000.000đ",
      quantity: 1,
      description: "Laptop Gaming",
    },
  ];

  return (
    <div className="header__cart-list">
      <img
        src="./assets/img/no_cart.png"
        alt="No cart"
        className="header__cart-no-cart-img"
      />
      <span className="header__cart-no-cart-msg">Chưa có sản phẩm</span>

      <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
      <ul className="header__cart-list-item">
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            imgSrc={item.imgSrc}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
            description={item.description}
          />
        ))}
      </ul>
      <a href="/" className="header__cart-view-cart btn btn--primary">
        Xem giỏ hàng
      </a>
    </div>
  );
};

export default Cart;
