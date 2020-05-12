import React, {Component} from 'react';
import Countries from './components/countries';

class App extends Component {
	
	state = {
    countries: []
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
          <Countries countries={this.state.countries} />
        )
      }
    }

    export default App;
