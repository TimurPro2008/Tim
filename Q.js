// App.js
// Все в папку src-components
// Импортируем стили для компонента App
import './App.css';
import Header

// Создание главного  компонента App
function App(){
    // Компонент просто возвращает нам разметку (JSX)
    return(
        <div className='App'>
            <Header />
            <h1>Мое первое приложение Spotik</h1>
        </div>
    );
}

// Экспортируем компонент App, чтобы его можно было использовать(импортировать)
// в других файлах
export default App;

// node -v; npm -v;
// npx create-react-app spotik