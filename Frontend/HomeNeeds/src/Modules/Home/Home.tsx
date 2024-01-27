import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../../products";
import ProductList from "../ProductList/ProductList";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <main className="py-3">
      <Container>
        <h1>Latest Products</h1>
        <Row>
          {products.map((product: any) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
                <ProductList product={product} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </main>
  );
}

{
  /* <main className='py-3'>
      <Container>
        <Home/>
      </Container>
     </main> */
}
