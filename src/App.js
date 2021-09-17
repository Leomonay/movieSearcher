import { Route } from 'react-router';
import './App.css';
import Buscador from './components/Buscador/Buscador';
import Favorites from './components/Favorites/Favorites';
import Movie from './components/Movie/Movie';
import NavBar from './components/NavBar/NavBar';
import background from './assets/tapeY.gif'

function App() {
  return (
    <div className="App">
        <NavBar />
        <img className='appBackground' src={background} alt=''/>
          <Route exact path="/" component={Buscador} />
          <Route path="/favs" component={Favorites} />
          <Route path="/movie/:id" component={Movie} />
    </div>
  );
}

export default App;
