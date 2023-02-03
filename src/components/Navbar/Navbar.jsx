import n from './Navbar.module.css'
const Navbar = () => {
    return (
        <nav className  = {n.nav}>
        <a href="#!">Профиль</a>
        <a href="#!">Сообщения</a>
        <a href="#!">Новости</a>
        <a href="#!">Музыка</a>
        <a href="#!">Настройки</a>
      </nav>
    );
  };
   
  
  export default Navbar;