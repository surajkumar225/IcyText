import './App.css';
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import { Alert } from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>  
    <NoteState>
    <Router>  
    <Navbar/>
    <Alert message="Going Great.."/>
    <div className="container">
    <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
         
        </Switch>
        </div>
        </Router>  
        </NoteState>
    </>
  );
}

export default App;