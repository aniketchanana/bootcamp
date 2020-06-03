import React from 'react';
import './css/App.css';
// import dice1 from './dice images/dice1.png';
// import dice2 from './dice images/dice2.png';
// import dice3 from './dice images/dice3.png';
// import dice4 from './dice images/dice4.png';
// import dice5 from './dice images/dice5.png';
// import dice6 from './dice images/dice6.png';

// const dices = [dice1,dice2,dice3,dice4,dice5,dice6];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      heading: 'aniket'
    }
    // this.handelInput = this.handelInput.bind(this);
  }
  handelInput = (event) => {
    if (event.target.value.includes('a')) {
      this.setState({
        heading: 'hello'
      })
    } else {
      this.setState({
        heading: event.target.value
      })
    }
  }
  render() {
    return (
      <div className="main__app ">
        <h1>{this.state.heading}</h1>
        <input onInput={this.handelInput} value={this.state.heading}/>
      </div>
    )
  }
}

export default App;
