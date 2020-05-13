import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import Country from './Country';



const Router= () => (

      <BrowserRouter>
			<Switch>
        		<Route exact path='/' component={App} />
				<Route path="/country/:name" component={Country} />
			</Switch>
      </BrowserRouter>
    
  );

export default Router;
