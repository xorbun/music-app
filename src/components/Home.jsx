import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Card } from 'react-bootstrap'
const Homescreen=()=>
{

    const Artistifromredux=useSelector((state)=>
    {
      return state.content
      
    })
  
    return(
            // console.log(Artistifromredux)
         <div className="col-12 col-md-9 offset-md-3 mainPage">
         <div className="row">
           <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
             <a href="#">TRENDING</a>
             <a href="#">PODCAST</a>
             <a href="#">MOODS AND GENRES</a>
             <a href="#">NEW RELEASES</a>
             <a href="#">DISCOVER</a>
           </div>
         </div>
         <div className="row">
           <div className="col-10">
             <div id="searchResults">
               <h2>Search Results</h2>
               <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
               {Artistifromredux.length>0 &&
               
               <Card style={{ width: '18rem' }} >
                   <Card.Body className='d-flex justify-content-center'>
                   <img src={Artistifromredux[0].data[0].album.cover} width="50%"/> 
                   </Card.Body>
                   <Card.Body className='d-flex justify-content-center'>
                   <img src={Artistifromredux[0].data[1].album.cover} width="50%"/> 
                   </Card.Body>
                   <Card.Body className='d-flex justify-content-center'>
                   <img src={Artistifromredux[0].data[2].album.cover} width="50%"/> 
                   </Card.Body>
                   <Card.Body className='d-flex justify-content-center'>
                   <img src={Artistifromredux[0].data[6].album.cover} width="50%"/> 
                   </Card.Body>
                   <Card.Body className='d-flex justify-content-center'>
                   <img src={Artistifromredux[0].data[5].album.cover} width="50%"/> 
                   </Card.Body>
               </Card>
               
              }
              
               </div>
             </div>
           </div>
         </div>
       
        </div>
   
    )
}
export default Homescreen