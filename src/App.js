
import './App.css';
import { Header } from './Components/Header/Header';
import { SearchBooks } from './Components/SearchBooks/SearchBooks';
import { RecomendedBooks } from './Components/RecomendedBooks/RecomendedBooks';
import { FreeBooks } from './Components/FreeBooks/FreeBooks';
import { Footer } from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchBooks/>
      <RecomendedBooks/>
      <FreeBooks/>
      <Footer/>
    </div>
  );
}

export default App;
