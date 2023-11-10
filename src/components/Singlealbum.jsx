import { Card, CardBody } from "react-bootstrap"

const Cardforartist=(props)=>
{
 
    return (
        
        <Card style={{ width: '18rem' }} >
        <Card.Body className='d-flex justify-content-center'>
        <img src={props.data[0].album.cover} width="50%"/> 
        {console.log("ciao")}
        </Card.Body>
       
    </Card>
    )
    

}

export default Cardforartist        