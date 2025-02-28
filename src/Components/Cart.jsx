import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Zoom from 'react-reveal/Zoom';
const Cart=({data})=>{


    return (
     
   
        <>
            <Zoom left>


        {data.length>1?data.map((item)=>{
          return(
<Card key={item.id} style={{ width: '100%' }} className='d-flex flex-row mt-4'>
          <Card.Img variant="top" style={{width:'300px', height:'200px'}} src={item.img_url} />
          <Card.Body>
            <div className='d-flex justify-content-between'>
            <Card.Title>{item.cat_name}</Card.Title>
            <Card.Title>{item.price} جنيه</Card.Title>
            </div>
            
            <Card.Text className='mt-5'>
            {item.desc}
            </Card.Text>
          </Card.Body>
          </Card>

          )
      
          
        } ):<h2>No Exist Data</h2>}
       </Zoom>
        </>
    )
}
export default Cart