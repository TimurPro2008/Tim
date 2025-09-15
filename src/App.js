// Импортируем  стили для компонента App
import './App.css';

import Track from './components/Track';
import Header from './components/Header';

// создание главного компонента App

function App(){
  // компонент просто возвращает разметку (JSX)
  return(
    <div className='App'>
      <Header />
      <Track 
      title = "42"
      artist="Serega Pirat"
      album = "Goyda"
      duration = "42:24"
      />
      <Track 
      title = "41"
      artist="Saraga Pirat"
      album = "Goydg"
      duration = "43:14"
      />
      <h1> Мое первое приложение Musipoty</h1>
    </div>
  );
}

// Экспортиуем компонент App, чтобы его можно было (импортировать)
//в других файлах
export default App;