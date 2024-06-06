import { Link } from "react-router-dom";
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
    <Link to={"/orderStatus"}>
      <HeaderUserMenuItem href="" text="Đơn mua" />
    </Link>
    <Link to={"/login"}>
      <HeaderUserMenuItem href="" text="Đăng xuất" separate />
    </Link>
  </ul>
);

export default HeaderUserMenu;
