import Header from './Modules/shared/Header/Header';
import Footer from './Modules/shared/Footer/Footer';
import Home from "../src/Modules/Home/Home";
import { Routes ,Route} from 'react-router-dom';
import ProductDetails from './Modules/Product/ProductDetails/ProductDetails';

export default function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product/:id' element={<ProductDetails/>} />
    </Routes>
     <Footer/>
    </>
  )
}
