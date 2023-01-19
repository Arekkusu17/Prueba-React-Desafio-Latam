import MiApi from './components/MiApi';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <MiApi />
      <Footer />
    </>
  )
}

export default App;