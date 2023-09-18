import { useEffect } from "react";
import { Col, Container,Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/Product-Slice";
import { addCart } from "../rtk/slices/Cart-Slice";
import { addToFav } from "../rtk/slices/fav-Slice";

function Products() {
    const products=useSelector((state)=>state.products)
    const dispatch=useDispatch();
    
    useEffect(()=>{
      dispatch(fetchProducts())
    })
    
    return(
    <Container className="py-5">
    <Row className="py-5">
      {products.map((product)=>(
        <Col key={product.id}>
        <Card style={{ width: '18rem'}}>
        <Card.Img style={{height:'270px'}} variant="top" src={product.image} />
        <Card.Body>
        <Card.Title>{product.Title}</Card.Title>
        <Card.Text >
          {product.description}
         </Card.Text>
         <Card.Text style={{color:"green"}}>
          {product.price}$
         </Card.Text>
        <Button style={{ margin:'10px' }} variant="primary" onClick={()=>dispatch(addCart(product))}>Add to Cart</Button>
        <Button style={{ margin:'10px' }} variant="danger"onClick={()=>dispatch(addToFav(product))}>Add to favourite</Button>
       </Card.Body>
        </Card>
    </Col>
      ))}
            </Row>
      
    </Container>
    )
}
export default Products;