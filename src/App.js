import React from 'react';
import RandomQuotes from './components/RandomQuotes';
import './App.css';
import axios from 'axios';

const sampleSimpson = {
  character: "Marge Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMargeSimpson.png",
  quote: "I sleep in the bath tub"
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { quotes: sampleSimpson };
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
      .then(response => response.data)
      .then(data => {
        console.log(data);
        this.setState({
          quotes: data[0],
        });
      });
  }


  render() {
    return (
      <div className="App">
        <RandomQuotes quotes={this.state.quotes} />
        <button type="button" onClick={this.getQuote}>More quotes !</button>
      </div>
    );
  };
}

export default App;
