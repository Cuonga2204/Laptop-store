const HeaderUserMenuItem = ({ href, text, separate }) => (
  <li className="header__navbar-user-item">
    <a href={href}>{text}</a>
  </li>
);

// HeaderUserMenu Component
const HeaderUserMenu = () => (
  <ul className="header__navbar-user-menu">
    <HeaderUserMenuItem href="" text="Tài khoản của tôi" />
    <HeaderUserMenuItem href="" text="Địa chỉ của tôi" />
    <HeaderUserMenuItem href="" text="Đơn mua" />
    <HeaderUserMenuItem href="" text="Đăng xuất" separate />
  </ul>
);

export default HeaderUserMenu;
