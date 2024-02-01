import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
     <NavBar />
     <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Nuestros productos:'}/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Nuestros productos:'}/>} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />}  />
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
