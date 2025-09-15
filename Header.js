// Компонент - это просто функция, которая возвращает JSX
function Header(){
    const websiteTitle = "Spotik - музон";
    const currentUser = {
        name: "Олег",
        isLoggedIn: false
    };

    function handleLoginClick(){
        Alert(currentUser.isLoggedIn ? 'До свидания' : 'Добро пожаловать!');
    }

    return(
        <header className="header">
            <div className="logo">{websiteTitle}</div>
            <button className="Login-btn">
                {currentUser.isLoggedIn ? 'Выйти' : 'Войти'}
            </button>
        </header>
    );
}

export default Header;

3