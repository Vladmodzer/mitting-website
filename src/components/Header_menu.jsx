
import { Link } from "react-router-dom";
import Header from "./Header";


function Header_menu() {


  return (

    <nav>
      <ul className="header_menu-box">
        <li className="header_menu-item">
          <Link to="/registration">создать анкету</Link>
        </li>
        <li  className="header_menu-item">
         <Link to="/login" >войти</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header_menu;
