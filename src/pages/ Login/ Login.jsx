import Header from "../../components/Header";
import "./ Login.css"
import React, { useState } from 'react';
const url = 'https://otokariev.pythonanywhere.com/api/account/login/';
const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Логика для выхода пользователя
    // В данном примере просто сбрасываем флаг входа в состояние
    setLoggedIn(false);
  };
  const postData = {
    email:"der@zon.der",
    password:"zonder82",
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', // Установите тип содержимого, если отправляете JSON
      // Добавьте другие заголовки, если необходимо
    },
    body: JSON.stringify(postData), // Преобразуйте данные в строку JSON
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Распарсить ответ в формате JSON
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  return (
    <div>
      <Header />
      <div className="login">
        {isLoggedIn ? (
          <div >
            <p>Вы вошли на сайт!</p>
            <button onClick={handleLogout}>Выйти</button>
          </div>
        ) : (
          <div className="login__box">
            <label>
              <p>

                Имя пользователя:
              </p>
              <input
                className="login__input"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              <p>
                Пароль:

              </p>
              <input
                className="login__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <button className="login__button" onClick={handleLogin}>Войти</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
