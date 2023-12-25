import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside>

      <div className="sidebar_btn-box2">
        <div className="sidebar_btn-box2-wrapper">
          <button className="sidebar_btn">все пользователи</button>
          <button className="sidebar_btn">мужчины</button>
          <button className="sidebar_btn">женщины</button>
          <button className="sidebar_btn">
            <Link className="sidebar_btn-link" to="/registration">создать анкету</Link>
            </button>
          <button className="sidebar_btn">войти</button>
          <input className="sidebar_input" type="text" placeholder="искать..." />
        </div>
      </div>
      
    </aside>
  );
}

export default Sidebar;
