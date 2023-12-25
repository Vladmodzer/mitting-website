import "./UserPage.css";
import Header from "../../components/Header";
import photo from "../../img/3.jpeg";
import { useState } from "react";

const UserPage = () => {
  const [isButton, setButton] = useState(false);

  function toggleButton() {
    setButton(!isButton);
    console.log(isButton);
  }

  return (
    <div>
      <Header />
      <div className="card__wrap">
        <div className="card">
          <div className="card__inner-wrapper">
            <div className="card__inner">
              <div className="card__photo">
                <img src={photo} alt="User" className="rounded-image" />
              </div>
              <div className="card__data">
                <h2>User Name</h2>
                <p>Date of Birth: January 1, 1990</p>
                <p>Gender: Male</p>
                <p>
                  About Me: Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit.
                </p>
                <button className="card__data-button" onClick={toggleButton}>
                  {!isButton?'Edit Profile': 'Close'}
                </button>
              </div>
            </div>
            <div className={isButton?'card__inputs': 'hidden'}>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <div className="card__inputs-button-box">

              <button className="card__inputs-button">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
