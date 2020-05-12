 import React from 'react'

    const Countries = ({ countries }) => {
      return (
        <div>
          <center><h1>Ország lista</h1></center>
          {countries.map((countries) => (
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{countries.name}</h6>
                
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Countries