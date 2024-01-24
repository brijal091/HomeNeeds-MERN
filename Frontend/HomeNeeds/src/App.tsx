import React from 'react'
import Header from './Modules/shared/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from './Modules/shared/Footer/Footer';
import Home from "../src/Modules/Home/Home";

export default function App() {
  return (
    <>
    <Header />
     <main className='py-3'>
      <Container>
        <Home/>
      </Container>
     </main>
     <Footer/>
    </>
  )
}
