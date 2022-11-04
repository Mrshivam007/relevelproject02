import './App.css';
import Header from './Header';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import Movies from './Movies';
import Ticket from './Ticket';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/relevelproject02" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="movies" element={<Movies />} />
      <Route path="ticket" element={<Ticket />} />
      </Routes>
      </BrowserRouter>
    
      
    </div>
  );
}
export default App;
