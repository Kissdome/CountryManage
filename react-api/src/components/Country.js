import React from 'react';

class Country extends React.Component{
	state={
		activeCountry: []
	}


	render(){
		const country=this.props.location.state.countries;
		return (
			<div key={country.alpha3Code}  className="container">
				<center><h1>Ország adatok</h1></center>
				<h2>Országnév: {country.name}</h2>
				<h2>Főváros: {country.capital}</h2>
				<p>Népesség: {country.population}</p>
				<p>Régio: {country.region}</p>
				
				<p> Országnév fordítása:</p>
				<ul>
					<li>Német: {country.translations.de}</li>
					<li>Japán: {country.translations.ja}</li>
					<li>Angol: {country.translations.es}</li>
				</ul>
				
				<img className="box-img"  src={country.flag}/>
				
			</div>
		)
	}
}

export default Country