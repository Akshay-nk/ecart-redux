import React from 'react'
import { Row ,Col, Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { dltwishlist } from '../redux/slice/wishlistslice'
import { addToCart } from '../redux/slice/cartslice'


function Wishlist() {

 const wishlistArray=useSelector((state)=>state.wishlistreducer)
 const dispatch=useDispatch()

 const handleWishlistCart=(product)=>{
  dispatch(addToCart(product))
  dispatch(dltwishlist(product.id))
 }
 
  return (
    <div style={{marginTop:'100px'}}>Wishlist

    <Row>
{
wishlistArray.length>0?
wishlistArray.map((product,index)=>(


 <Col>
 <Card key={index} className='m-3' style={{ width: '18rem'}}>
<Card.Img height={'200px'} variant="top" src={product?.thumbnail} />
<Card.Body>
 <Card.Title>{product.title.slice(0,25)}</Card.Title>
 <Card.Text>
  {product?.description.slice(0,50)}
 </Card.Text>
 <h5>{product?.price}</h5>

<div className='d-flex  justify-content-between'>
<Button  onClick={()=>dispatch(dltwishlist(product.id))} variant="outline" className='btn ' ><i class="fa-solid fa-trash" style={{color: '#d22014'}}></i> </Button>
 <Button onClick={()=>handleWishlistCart(product)} variant="outline" className=' btn '><i class="fa-solid fa-cart-shopping" style={{color: '#eb1405'}}></i> </Button>

</div>
</Card.Body>
</Card>
 </Col>
)):<div style={{height:'100vh'}} className='w-100 d-flex dlex-column align-items-center justify-content-center'>
  
  <img height={'500px'} src="https://th.bing.com/th?id=OIP.0vJdB4yOqGq022H3RySqQgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="hhh" />
  <Link className='btn btn-warning rounded' style={{textDecoration:'none'}} to={'/'}>Back to Home</Link>
</div>


}



    </Row>

    </div>
  )
}

export default Wishlist