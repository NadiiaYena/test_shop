import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  import './style.css'
  import Menu from "../src/components/Menu";

function App() {
  return (
    <div className="App">
       
        <BrowserRouter>
        <Menu/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
