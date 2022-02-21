
import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import TodolistComponent from './components/TodolistComponent';

function App() {
  return (
    <div>
      <HeaderComponent />
      <div className="container">
        
        <TodolistComponent />
        
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
 