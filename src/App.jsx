import React , {useEffect} from "react";
import {Helmet} from "react-helmet";
import { Switch, Route } from "react-router-dom";
import Aos from 'aos'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import FAQ from './pages/FAQ'
import Roadmap from './pages/Roadmap'

import 'aos/dist/aos.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/responsive.css';

import 'bootstrap/dist/js/bootstrap.bundle.min';


const App = () => {
  useEffect(() => {

    Aos.init({
      duration: 1000
      })
  },[])

  useEffect(() => {
    document.body.classList.add('darker')
  },[])

  return (
    
    	<div className="App">
        <Helmet>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <title>
            NFT Marketplace
          </title>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0=" crossorigin="anonymous" />
        </Helmet>
  			<Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about-us" component={About} />
          <Route path="/faq" component={FAQ} />
          <Route path="/collection" component={Collection} />
          <Route path="/contact-us" component={Contact} />
          <Route path="/roadmap" component={Roadmap} />
  			</Switch>
	    </div>    
  );
}

export default App;