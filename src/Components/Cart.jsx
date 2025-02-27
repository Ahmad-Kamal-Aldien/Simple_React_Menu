import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cart=({data})=>{


    return (
        <>
        {data.length>1?data.map((item)=>{
          return(
<Card style={{ width: '100%' }} className='d-flex flex-row'>
          <Card.Img variant="top" style={{width:'300px', height:'200px'}} src={item.img_url} />
          <Card.Body>
            <div className='d-flex justify-content-between'>
            <Card.Title>{item.cat_name}</Card.Title>
            <Card.Title>{item.price}</Card.Title>
            </div>
            
            <Card.Text className='mt-5'>
            {item.desc}
            </Card.Text>
          </Card.Body>
          </Card>

          )
      
          
        } ):<h2>No Exist Data</h2>}
       
        </>
    )
}
export default Cart