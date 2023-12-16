import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Experience from './components/Experience';

function App() {
  return (
    <div className='App' class='m-0 p-0'>
      
        <Header />
        <Skills />
        <Projects />
        <Experience/>
        <Contact />
      
    </div>
    
  );
}

export default App;
