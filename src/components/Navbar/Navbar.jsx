import { NavLink } from "react-router-dom";
import n from "./Navbar.module.css";

const isActive = ({ isActive }) => `${n.link} ${(isActive ? n.active : '')}`;

const Navbar = () => {
  return (
    <nav className={n.nav}>
      <NavLink to="/profile" className={isActive}>
        Профиль
      </NavLink>
      <NavLink to="/dialogs" className={isActive}>
        Сообщения
      </NavLink>
      <NavLink to="/news" className={isActive}>
        Новости
      </NavLink>
      <NavLink to="/music" className={isActive}>
        Музыка
      </NavLink>
      <NavLink to="/settings" className={isActive}>
        Настройки
      </NavLink>
    </nav>
  );
};

export default Navbar;
