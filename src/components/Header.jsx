import { Link } from "react-router-dom"
import Header_menu from "./Header_menu"


function Header() {
  return (
    <header className="header">
      <h1>
        <Link className="header__logo" to="/">Skladushki</Link>
      </h1>
      <Header_menu/>
    </header>
  )
}

export default Header
