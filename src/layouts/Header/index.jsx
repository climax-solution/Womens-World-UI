import {useEffect} from 'react'
import data from "../../data/static.json"

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import { NavLink, useRouteMatch } from 'react-router-dom'
import ConnectWallet from '../../components/ConnectWallet'

const Header = ({Title}) => {

  const match = useRouteMatch('/mint');
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
          <a className="navbar-brand" href="#"><span><img draggable="false" src="img/core-img/logo.jpg" alt="logo" /></span> </a>
          {/* Toggler/collapsibe Button */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Navbar links */}
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ml-auto">
              {data[0]?.header?.MenuInfo?.map((item , key) => (
                <li className="nav-item" key={key}>
                  <NavLink className="nav-link" to={item.path}>{item.nameLink}</NavLink>
                </li>
              ))}
              { match?.isExact ? "" : <ConnectWallet notHeader={false}/>}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;