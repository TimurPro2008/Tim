// Компонент - это просто функция, которая возвращает JSX он же html
import'./Header.css';
function Header(){
    const webSiteTitle = "Musipoty - музон"
    const currentUser = {
        name: "Олег",
        isLoggedIn: false
    };

    function handleLoginClick(){
        alert(currentUser.isLoggedIn ? 'До свидания!' : 'Добро пожаловать?');
    }
  
    return(
        <header className="header">
            <div className="logo">
                {webSiteTitle}
            </div>
            <button className="login-btn" onClick={handleLoginClick}>
                {currentUser.isLoggedIn ? 'Выйти' : 'Войти'}
            </button>
        </header>
    );
}

export default Header;