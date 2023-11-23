import { Card } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, } from "react";
import { useDispatch } from "react-redux";
import { Onemusic } from "../redux/actions";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Cardforartist=(props)=>
{
    const musicfromredux=useSelector((state)=>
    {
      return state.onlyone
    })
    const dispatch=useDispatch()
    const [selected,setselected]=useState()
    
    const Selectedalbum=() =>
    {
         setselected(!selected)
    }
    return (
     <div className="mb-2"> 
        <Card className={props.utente.id===musicfromredux[0].id?'border border-danger p-4' :''}>
            <Card.Body className='d-flex'>
                <img className="w-30"variant="top"src={props.utente.album.cover} 
                    alt="coverAlbum" 
                    width="50%" 
                    onClick={(e)=>
                    {
                        Selectedalbum()
                        e.preventDefault()
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