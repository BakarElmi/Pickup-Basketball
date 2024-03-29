import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import logo from "./logo1.png"

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        {/* <h2 className="nav-title">Pickup Basketball</h2> */}
        <img src={logo} alt="Logo" />
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            {/* <Link className="navLink" to="/user">
              Home
            </Link> */}

            <Link className="navLink" to="/player">
              My Player
            </Link>

            <Link className="navLink" to="/courts">
              Find Court
            </Link>

            <Link className="navLink" to="/scoreboard1">
              Scoreboard
            </Link>

            <Link className="navLink" to="/top10">
              Top 10
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}


      </div>
    </div>
  );
}

export default Nav;
 