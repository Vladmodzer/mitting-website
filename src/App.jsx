import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./pages/Registration/ RegistrationPage";
import Office from "./pages/Office/Office";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import RegestrationSecsses from "./pages/RegestrationSecsses/RegestrationSecsses";
import LoginForm from "./pages/ Login/ Login";
import UserPage from "./pages/User_page/UserPage";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<RegistrationPage/>}/>
          <Route path="/office" element={<Office/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/regestration_secsses" element={<RegestrationSecsses/>}/>
          <Route path="/login" element={<LoginForm/>}/>
          <Route path="/user-page" element={<UserPage/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
