import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap'
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import {Row} from 'react-bootstrap'

const Controller=()=>
{
     const musicfromredux=useSelector((state)=>
    {
      return state.onlyone
      
    })
    return(
        
        <div className="container-fluid fixed-bottom bg-container pt-1">
      <div className="row h-75">
        <div className="col-lg-10 offset-lg-2">
          <div
            className="row h-75 flex-column justify-content-center align-items-center"
          >
           
            
  );
        <Row>
            <div className='col-5 d-flex flex-column mt-2'fluid>
                {musicfromredux.length>0 &&
                <>
                  <img src={musicfromredux[0].album.cover} width="50" alt="ciao" />
                  <span className='text-white'>{musicfromredux[0].title}</span>
                </>
                }
            </div>
            <div className="col-6 col-md-4 playerControls">
              <div className="d-flex"><a href="#">
                  <img src="assets/playerbuttons/shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="assets/playerbuttons/repeat.png" alt="repeat" />
                </a>
              </div>
        
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </div>
        </Row>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Controller