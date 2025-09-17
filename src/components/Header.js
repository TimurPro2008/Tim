// Компонент - это просто функция, которая возвращает JSX он же html
import { useState } from 'react';

import'./Header.css';
function Header(){
    const webSiteTitle = "Musipoty - музон"
    const [isLoggedIn, setIsloggedIn] = useState(false);

    function handleLoginClick(){
        setIsloggedIn(!isLoggedIn);
    }

    return(
        <header className="header">
            <div className="logo">
                {webSiteTitle}
            </div>
            <div className='MenuDiv'>
                <p>Меню</p>
                <nav>
                    <button>Каталог</button>
                    <button>О нас</button>
                </nav>
            </div>
            <button className="login-btn" onClick={handleLoginClick}>
                {isLoggedIn ? 'Выйти' : 'Войти'}
            </button>

        </header>
    );
}

export default Header;