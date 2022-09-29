import {useEffect, useState} from 'react'
import data from "../../data/static.json"

import {Addshrink , moveSmooth} from "../../utils/"

import './header.css'

import Preloader from '../../components/Preloader'

import { NavLink } from 'react-router-dom'

const Header = ({Title}) => {

  const [walletAddress, setWalletAddress] = useState('');
  useEffect(() => {
      Addshrink()
  },[])

  useEffect(() => {
      moveSmooth()
  },[])

  const connectWallet = async() => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts"
        });
        setWalletAddress(accounts[0]);
      }
    } catch(err) {

    }
  }

  return (
    <>
      <Preloader Title={Title} />
      <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
        <div className="container">
          {/* Brand */}
          <a className="navbar-brand" href="#"><span><img draggable="false" src="img/core-img/logo.jpg" alt="logo" /></span> </a>
          {/* Toggler/collapsibe Button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
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

              <li className="lh-55px" key={"xy"} onClick={!walletAddress ? connectWallet : null}><span className="btn login-btn ml-50">{
                walletAddress ? (walletAddress.slice(0, 8) + '...' + walletAddress.slice(-5) ) : "Connect Wallet"
              }</span></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;