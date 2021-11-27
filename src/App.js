import './App.css';
import Projects from './pages/Projects/Projects';
import About from './pages/About';
import Contact from './pages/Contact/Contact';
import Interests from './pages/Interests/Interests';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <main >
        <div className="container-fluid">

          <Home />
          <About />
          <Projects />
          <Interests />
          <Contact />

        </div>
      </main>
    </div>
  );
}

export default App;
