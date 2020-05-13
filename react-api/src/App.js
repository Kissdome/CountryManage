import React, { Component } from 'react';
import Countries from './components/Countries';
import Search from './components/Search';

class App extends Component {
	 state = {
        countries: [],
		filterCountry: []
      }



getInfo=async (e) =>{
	e.preventDefault(); 
	const info = e.target.elements.info.value;
	const api_call=await fetch(`https://restcountries.eu/rest/v2/name/${info}`)
	 
	const data= await api_call.json();
	this.setState({filterCountry: data})
}

componentDidMount() {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then((data) => {
          this.setState({ countries: data })
        })
        .catch(console.log)
      }
render() {
        return (
			<div>
				<div>
				<Search getInfo={this.getInfo} />
				{this.state.filterCountry.map((country) => {
					return (
						<div>
						<p key={country.alpha2Code}>{country.name}</p>
							<ul>
								<li>Főváros: {country.capital}</li>
								<li>Népesség: {country.population}</li>
								<li>Régió: {country.region}</li>
							</ul>
							</div>
						);
					})}
					</div>
				<div>
				<Countries countries={this.state.countries} />
					</div>
		  </div>
        )
}
}

export default App;
