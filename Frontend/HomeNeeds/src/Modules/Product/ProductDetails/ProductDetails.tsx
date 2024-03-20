import React from 'react'
import { useParams } from 'react-router-dom';
import products from '../../../products';
import {Row, Col, Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap';
import Review from '../../shared/Review/Review';
import { Link } from 'react-router-dom';

function ProductDetails() {
    const {id:productId} = useParams()
    const product = products.find((p) => p._id === productId)
    console.log(product)

  return (
    <>
    <Link className='brn brn-light my-3' to={"/"}>Go Back</Link>
    <Row>
        <Col md={5}>
            <Image src={product?.image} alt={product?.name} fluid />
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product?.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Review value={product!.rating} text={`${product?.numReviews} Reviews`} />
                </ListGroup.Item>
            </ListGroup>
        </Col>
        <Col md={3}>
            <Card>
                <ListGroup variant='flush'>
                    <ListGroupItem>
                        <Row>
                            <Col>Price: </Col>
                            <Col><strong>${product?.price}</strong></Col>
                            </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        </Col>
    </Row>
    </>
  )
}

export default ProductDetails