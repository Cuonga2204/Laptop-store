const CartItem = ({ imageUrl, name, currentPrice, quantity }) => {
  return (
    <li className="header__cart-item">
      <img src={imageUrl} alt={name} className="header__cart-img" />
      <div className="header__cart-item-info">
        <div className="header__cart-item-head">
          <h5 className="header__cart-item-name">{name}</h5>
          <div className="header__cart-item-price-wrap">
            <span className="header__cart-item-price">{currentPrice}</span>
            <span className="header__cart-item-multiply">x</span>
            <span className="header__cart-item-qnt">{quantity}</span>
          </div>
        </div>
        <div className="header__cart-item-body">
          <span className="header__cart-item-description">Phân loại: Nhôm</span>
          <span className="header__cart-item-remove">Xóa</span>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
