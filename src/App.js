

import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import TodolistComponent from './components/TodolistComponent';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter> 
          <HeaderComponent />
            <div className="container">
              <Routes>
                  <Route path="/" element={<TodolistComponent />} />
                  <Route path="todo" element={<TodolistComponent />} />
                  
                  
              </Routes>
            </div>
          <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
 