import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import TVShows from './Components/TVShows';
import MovieDetails from './Components/MovieDetails';
import SingleMovie from './Components/SingleMovie';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<div><TVShows name="harry%20potter" title="Harry Potter" /><TVShows name="Lord%20of%20the%20Rings" title="Lord Of the Rings" />
            <TVShows name="Spider%20Man" title="Spider Man" /></div>} />
          <Route path="/MovieDetails/:imdbID" element={<MovieDetails />} />
          <Route path="/SingleMovie" element={<SingleMovie name="harry%20potter" title="Harry Potter" />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
