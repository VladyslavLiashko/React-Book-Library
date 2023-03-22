
import './App.css';
import { Header } from './Components/Header/Header';
import { SearchBooks } from './Components/SearchBooks/SearchBooks';
import { RecomendedBooks } from './Components/RecomendedBooks/RecomendedBooks';
import { FreeBooks } from './Components/FreeBooks/FreeBooks';
import { Footer } from './Components/Footer/Footer';
import { Main } from './Components/Main/Main';
import { Route, Routes } from 'react-router-dom';
import { Collection } from './Components/Collection/Collection';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element ={<Main/>}/>
        <Route path='/Collection' element ={<Collection/>}/>
      </Routes>
      {/* <SearchBooks/>
      <RecomendedBooks/>
      <FreeBooks/> */}
      <Footer/>
    </div>
  );
}

export default App;
