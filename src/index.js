import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppWrapper } from './utils/context';
// basename="template_react"
ReactDOM.render(
	<BrowserRouter>
		<AppWrapper>
			<App />
		</AppWrapper>
	</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
