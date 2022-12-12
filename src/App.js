
import './App.css';
import { BrowserRouter  as Router,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import ListCarWash from './components/pages/ListCarwash';
import About from './components/pages/About';

function App() {
  let component
  // eslint-disable-next-line default-case
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break
    case "/home":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
    case "/list-carwash":
      component = <ListCarWash/>
      break

  }
  return(
  <>
  <Router>
    <NavBar/>
    <Routes>
      <Route path='/' exact/>
    </Routes>
  </Router>
  </>
  );
}

export default App;
