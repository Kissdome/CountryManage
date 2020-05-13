import React from 'react';
import { Link } from "react-router-dom";




    const Countries = ({ countries }) => {
      return (
        <div>
          <center><h1>Country List</h1></center>
          {countries.map((countries) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
					<Link to={{pathname:`/country/${countries.name}`,
							state: { countries:countries}}}>Országnév : 
							{countries.name}</Link>
						</h5>
				  <ul>
                	<li className="card-subtitle mb-2 text-muted">Főváros: {countries.capital}</li>
					<li className="card-subtitle mb-2 text-muted">Népesség: {countries.population}</li>
				  <li className="card-subtitle mb-2 text-muted">Régió: {countries.region}</li>
					 </ul>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Countries