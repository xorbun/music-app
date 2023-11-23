
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { Searchmusic } from '../redux/actions'
import { useState } from 'react'


const Menu=()=>
{

  const [Artistname,setArtistiname]=useState("")
  const dispatch=useDispatch()
  

    return(
        <div className="col col-2">
        <nav
          className="navbar navbar-expand-md fixed-left justify-content-between"
          id="sidebar"
        >
          <div className="container flex-column align-items-start">
            <a className="navbar-brand" href="index.html">
              <img
                src="assets/logo/logo.png"
                alt="Spotify Logo"
                width="131"
                height="40"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center"
                      href="#"
                      ><i className="bi bi-house-door-fill"></i>&nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="nav-item nav-link d-flex align-items-center"
                      href="#"
                      ><i className="bi bi-book-fill"></i>&nbsp; Your Library</a
                    >
                  </li>
                  <li>
                    <Form className="input-group mt-3" onSubmit={(e)=>
                    {
                      e.preventDefault()
                      dispatch(Searchmusic(Artistname))
                    }}>
                      <input
                        type="text"
                        className="form-control"
                        id="searchField"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                        value={Artistname}
                        onChange={(e)=>
                        {
                          e.preventDefault()
                          setArtistiname(e.target.value)
                          
                        }}

                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-outline-secondary btn-sm h-100"
                          type="submit"
                        >
                          GO
                        </button>
                      </div>
                    </Form>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">Sign Up</button>
            <button className="btn login-btn" type="button">Login</button>
            <a href="#">Cookie Policy</a> |
            <a href="#"> Privacy</a>
          </div>
        </nav>
      </div>
  )
}
export default Menu