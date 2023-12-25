import React, { useState, useContext } from "react";
import Header from "../../components/Header";
import "./Registration.css"
import { Link } from "react-router-dom";
import { AppContext } from "../../Context/ context";



const RegistrationPage = () => {
    const { isNextButton, toggleNextButton } = useContext(AppContext);
    const { isPrevButton, togglePrevButton } = useContext(AppContext);
    console.log("isNextButton:",isNextButton);
    console.log("isPrevButton:",isPrevButton);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь вы можете добавить логику обработки данных формы
        console.log("Form submitted:", formData);
        // Перенаправление на другую страницу или другие действия
    };

    return (
        <div>
            <Header />
            <div className="registration__box">
                <div className="registration__window">
                    <h2>Регистрация:</h2>
                    <form className="registration__form" onSubmit={handleSubmit}>
                        <label className="registration__label">
                            <p>Имя пользователя:</p>

                            <input
                                className="registration__input"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </label  >
                        <label className="registration__label">
                            <p> Email:</p>

                            <input
                                className="registration__input"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </label>
                        <label className="registration__label">
                            <p> Пароль:</p>

                            <input
                                className="registration__input"
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </label>
                        <button className="registration__button" type="submit">Зарегистрироваться</button>
                    </form>
                    <div className="registration__skip-buttons">

                        <Link to="/office" className="registration__next-btn --registration-btn" >next</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationPage;

