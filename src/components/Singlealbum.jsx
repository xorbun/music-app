import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, } from "react";
import { useDispatch } from "react-redux";
import { Onemusic } from "../redux/actions";

const Cardforartist=(props)=>
{
    
    const dispatch=useDispatch()
    const [selected,setselected]=useState(false)
    
    const Selectedalbum=() =>
    {
        setselected(!selected)
    }
  
    return (
     <div className="mb-2"> 
        <Card className={ selected ? 'border border-danger' :''} >
            <Card.Body className='d-flex'>
                <img className="w-30"variant="top"src={props.utente.album.cover} 
                    alt="coverAlbum" 
                    width="50%" 
                    onClick={(e)=>
                    {
                        Selectedalbum()
                        e.preventDefault()
                        console.log(props.utente)
                        dispatch(Onemusic(props.utente))
                        
                    } 
                }/>
            </Card.Body>
            <Card.Title className="d-flex justify-content-center">{props.utente.title}</Card.Title>
        </Card>
    </div>  
    )
    

}

export default Cardforartist        