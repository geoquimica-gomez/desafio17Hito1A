import './App.css'
import NavbarApp from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {


  return (
    <div className='appGrid'>
      <NavbarApp></NavbarApp>
      <Home></Home>
      <Footer></Footer>
    </div>
  )
}

export default App
