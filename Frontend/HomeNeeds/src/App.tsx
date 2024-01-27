import Header from './Modules/shared/Header/Header';
import Footer from './Modules/shared/Footer/Footer';
import Home from "../src/Modules/Home/Home";
import { Routes ,Route} from 'react-router-dom';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
     <Footer/>
    </>
  )
}
