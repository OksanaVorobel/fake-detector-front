import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './Header.css';
import {useAppSelector} from "../hooks/reduxHooks";
import {useActions} from "../hooks/useActions";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const { isAuthorized} = useAppSelector(state => state.userDuck)
    const { logOut } = useActions()

    const handleLogout = () => {
        logOut();
        navigate('/');
    }
    return (
    <header className="header">
      <div className="logo">
          <Link className="logo" to={isAuthorized ? "/detect" : "/"} >Fake Image Detector</Link>
      </div>
      <nav className="nav">
          {isAuthorized
              ? <div>
                  <Button className="nav-item" type="primary" href="/history">History</Button>
                  <Button className="nav-item" type="primary" onClick={handleLogout}>Logout</Button>
              </div>
              : <Button className="nav-item" type="primary" href="/login">Login</Button>
          }
      </nav>
    </header>
  );
};