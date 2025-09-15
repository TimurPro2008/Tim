// Импортируем  стили для компонента App
import { useState } from 'react';

import './App.css';

import Track from './components/Track';
import Header from './components/Header';

// создание главного компонента App

function App(){
  const [tracks, setTracks] = useState([
    {
      id: 1,
      title: "bogdan",
      artist: "mc Bogdan",
      album: "Bog Est",
      duration: "5:23"
    },
    {
      id: 2,
      title: "Oleg",
      artist: "Devil my cry",
      album: "V",
      duration: "6:02"
    },
    {
      id: 3,
      title: "Osman",
      artist: "Kto zdes",
      album: "Pizdec",
      duration: "2:42"
    }
  ]);

  // компонент просто возвращает разметку (JSX)
  return(
    <div className='App'>
      <Header />
      {tracks.map(track => (
        <Track
         key={track.id}
         // key помогает Reacty отслеживать из списка элементы

         title={track.title}
         artist={track.artist}
         album={track.album}
         duration={track.duration}
        />
      ))}
    </div>
  );
}

// Экспортиуем компонент App, чтобы его можно было (импортировать)
//в других файлах
export default App;