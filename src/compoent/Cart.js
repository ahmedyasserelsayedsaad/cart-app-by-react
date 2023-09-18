
import { Button, Container,Table,Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clear, remove } from "../rtk/slices/Cart-Slice";

function Cart() {
    const cart=useSelector((state)=>state.cart)
    const dispatch=useDispatch();
   const totalPrice=cart.reduce((acc,product)=>{
    acc+=product.price * product.qutity;
    return acc;
   },0)
    return(
        <Container className="mt-5">
            <h2 className="py-5" style={{color:'red'}}>welcome at cart </h2>
            
            <Button className="mb-3" variant="primary" onClick={()=>dispatch(clear())}>clear cart</Button>
            <h4>Total cart Price:{totalPrice.toFixed(2)}</h4>
             <Table striped="columns" className="mt-5" >
      <thead>
        <tr className="mt-5">
          <th>#</th>
          <th>Title</th>
          <th>image</th>
          <th>price</th>
          <th>quntity</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
{cart.map((product)=>(
    <tr key={product.id}>
        <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image style={{width:'100px',height:'100px'}} src={product.image} alt={product.title}/></td>
          <td>{product.price} $</td>
          <td>{product.qutity}</td>
          <td><Button variant="danger" onClick={()=>dispatch(remove(product))}>delete</Button></td>
        </tr>
))}
        
        
      </tbody>
    </Table>
        </Container>
    )
}
export default Cart;