
import './App.css';
import { Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import ListCarWash from './components/pages/ListCarwash';
import About from './components/pages/About';
import RegisterCarWash from './components/pages/RegisterCarWash';
import Login from './components/PageComponents/Login';
import Footer from './components/Footer';
import SignUp from './components/PageComponents/SignUp'


function App() {
  
  return(
    <>
    <NavBar/>
    <div className='page-container'>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/list-carwash' element = {<ListCarWash/>}/>
        <Route path='/register-carwash' element = {<RegisterCarWash/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/signup' element = {<SignUp/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )

}

export default App;
