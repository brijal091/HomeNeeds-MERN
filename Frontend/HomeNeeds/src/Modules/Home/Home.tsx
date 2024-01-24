import React from 'react'
import {Row, Col} from 'react-bootstrap';
import products from '../../products';

export default function Home() {
  return (
    <>
     <h1>Latest Products</h1> 
     <Row>
      {products.map((product:any)=>{
        return(
          <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
            <h3>{product.name}</h3>
          </Col>
        )
      })}
     </Row>
    </>
  )
}
