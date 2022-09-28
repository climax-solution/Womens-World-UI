import {useEffect} from 'react'
import data from "../../data/static.json"

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import { NavLink } from 'react-router-dom'

const Header = ({Title}) => {

  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  return (
    <>
      <Preloader Title={Title} />
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#"><span><img draggable="false" src="img/core-img/logo.png" alt="logo" /></span> </a>
          {/* Toggler/collapsibe Button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Home</a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {data[0]?.header?.dataDown?.map((item , key) => (
                    <NavLink className="dropdown-item" key={key} to={item.path}>{item.title}</NavLink>
                  ))}
                </div>
              </li>

              {data[0]?.header?.MenuInfo?.map((item , key) => (
                <li className="nav-item" key={key}>
                  <NavLink className="nav-link" to={item.path}>{item.nameLink}</NavLink>
                </li>
              ))}

              <li className="lh-55px"><a href="#" className="btn login-btn ml-50">Connect Wallet</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;