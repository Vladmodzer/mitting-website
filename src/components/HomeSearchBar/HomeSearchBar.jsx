import { useState } from "react";
import "./HomeSearchBar.css"
import { FiArrowDownCircle } from "react-icons/fi";

function HomeSearchBar() {
    const [isColaps ,setColaps] = useState(false);
    const togle = () => {
        setColaps(!isColaps);
        console.log(isColaps);
    }
    
    return (

        <div className="home__serch-bar">
            <div className={isColaps? 'home__serch-bar-bg':'collapsed-serch-bar-bg '}>

            <div className="dropdown">
                <button className={isColaps?'dropbtn':'hidden'}>
                    пол
                    <FiArrowDownCircle className="dropbtn__pic" />
                </button>
                <div className="dropdown-content">
                    <a href="#">Опция 1</a>
                    <a href="#">Опция 2</a>
                    <a href="#">Опция 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className={isColaps?'dropbtn':'hidden'}>
                    возраст
                    <FiArrowDownCircle className="dropbtn__pic" />
                </button>
                <div className="dropdown-content">
                    <a href="#">Опция 1</a>
                    <a href="#">Опция 2</a>
                    <a href="#">Опция 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className={isColaps?'dropbtn':'hidden'}>
                    город
                    <FiArrowDownCircle className="dropbtn__pic" />
                </button>
                <div className="dropdown-content">
                    <a href="#">Опция 1</a>
                    <a href="#">Опция 2</a>
                    <a href="#">Опция 3</a>
                </div>
            </div>
            <button className={isColaps?'home__serch-btn': 'hidden'}>найти</button>
            <button className={isColaps? 'home__serch-btn': 'openButton'}
            onClick={togle}
            >{isColaps?'Свернуть':'Открыть поиск'}</button>
            </div>
            
        </div>
    )
}

export default HomeSearchBar
