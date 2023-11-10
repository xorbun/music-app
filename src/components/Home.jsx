import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Cardforartist from './Singlealbum'
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
                Artistifromredux.map((CoverA)=>
                {
                    <Cardforartist props={CoverA}/>
                })
              
                 
               
              }
              
               </div>
             </div>
           </div>
         </div>
       
        </div>
   
    )
}
export default Homescreen