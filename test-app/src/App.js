import React from 'react';
import Item from './item';
import './App.css';
class App extends React.Component {
  constructor (props) {
    super(props)
    // create a state
    this.state = {
      // The original state
      name: "Steve",
  };
  }
// We want to change the original state
  changeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  

  render(){
    return(
      <div>
        <h1>{this.props.city}</h1>
        <input type="text" value={this.state.name} 
        onChange = {this.changeName}></input>
        <Item itemData = {this.state.name}/>
      </div>
    )
  }
}

class Timer extends React.Component {
  constructor (props){
    super(props);
    this.state = { seconds: 0};
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}



export default App;
