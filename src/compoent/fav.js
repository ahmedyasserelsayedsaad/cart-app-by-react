import { Container,Table,Image, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearToFav, removeToFav } from "../rtk/slices/fav-Slice";

function Fav() {
    const fav=useSelector((state)=>state.fav)
    const dispatch=useDispatch();
    const totalPrice=fav.reduce((acc,product)=>{
        acc+=product.price * product.quantity;
        return acc;

    },0)
    return(
        <Container className="mt-5">
            <h2 className="py-5" style={{color:'red'}}>welcome to favourite component</h2>
            <Button variant="danger" onClick={()=>dispatch(clearToFav())}>clear</Button>
           <h4 className="mt-4"> total Your favourite Price:{totalPrice.toFixed(2)}</h4>
             <Table striped="columns" className="mt-5">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>image</th>
          <th>price</th>
          <th>quntity</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {fav.map((product)=>(
        <tr key={product.id}>
            <td>{product.id}</td>
          <td>{product.title}</td>
          <td><Image src={product.image} alt={product.title} style={{width:'100px',height:'100px'}} /></td>
          <td>{product.price}</td>
          <td>{product.quantity}</td>  
          <td><Button variant="primary" onClick={()=>dispatch(removeToFav(product))}>delete</Button></td>       
        </tr>
        ))}
      
      </tbody>
    </Table>
        </Container>
    )
}
export default Fav;