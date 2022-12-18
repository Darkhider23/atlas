
import './App.css';
import { Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import ListCarWash from './components/pages/ListCarwash';
import About from './components/pages/About';
import RegisterCarWash from './components/pages/RegisterCarWash';
import Login from './components/pages/Login';
import Footer from './components/Footer';
import CarWashList from './components/PageComponents/CarWashList';



function App() {
  
  return(
    <>
    <NavBar/>
    <div className='page-container'>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/list-carwash' element = {<CarWashList/>}/>
        <Route path='/register-carwash' element = {<RegisterCarWash/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/about' element = {<About/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )

}

export default App;
