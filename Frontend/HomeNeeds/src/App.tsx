import React from 'react'
import Header from './Modules/shared/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from './Modules/shared/Footer/Footer';

export default function App() {
  return (
    <>
    <Header />
     <main className='py-3'>
      <Container>
        <h1>Welcome to our page!</h1>
      </Container>
     </main>
     <Footer/>
    </>
  )
}
