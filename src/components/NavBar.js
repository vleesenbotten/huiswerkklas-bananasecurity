import React, {useContext} from 'react';
import logo from '../assets/banana-01.png';
import { useHistory, Link } from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";

function NavBar() {
  const history = useHistory();
  const { isAuth, logout } = useContext(AuthContext);
  console.log(isAuth);

  return (
   <>
    <nav>
        <Link to="/">
          <span className="logo-container">
            <img src={logo} alt="logo"/>
            <h3>
              Banana Security
            </h3>
          </span>
        </Link>

      <div>
        {/*{ conditie ? true : false }*/}
        {isAuth ?
         <button
          type="button"
          onClick={logout}>
           Logout
         </button>
         :
            <>
            <button
            type="button"
            onClick={() => history.push('/signin')}>
              Login
            </button>
            <button
            type="button"
            onClick={() => history.push('/signup')}>
              Registreren
            </button>
            </>
        }
      </div>
    </nav>
   </>

  );
}

export default NavBar;