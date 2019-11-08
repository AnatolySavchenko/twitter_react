import React, {Component} from 'react'
import Header from './components/Header/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import AllTwitts from './components/AllTwitts/AllTwitts';
import InfoTwitts from './components/InfoTwitts/InfoTwitts';


class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header/>
					<Route exact path="/" component={AllTwitts} />
					<Route path="/info" component={InfoTwitts} />
			</BrowserRouter>
		);
	}
}

export default App;
