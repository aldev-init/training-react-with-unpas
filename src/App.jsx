import Navbar from "./components/navbar.jsx";
import './assets/css/root.css'
import Footer from "./components/Footer.jsx";
import LoginPage from "./views/LoginPage.jsx";

function App() {
  return (
    <>
        <Navbar/>
        <LoginPage/>
        <Footer/>
    </>
  )
}

export default App
