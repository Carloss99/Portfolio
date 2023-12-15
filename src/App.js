import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <div className='App' class='m-0 p-0'>
      
        <Header />
        <Skills />
        <Projects />
      
    </div>
    
  );
}

export default App;
