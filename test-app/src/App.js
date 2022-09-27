import React from 'react';
import './App.css';
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: "Steve",
  };
  }

  changeName = event => {
    this.setState({
      name: event.target.value,
    })
  }

  render(){
    return(
      <div>
        <input type="text" value={this.state.name}></input>
      </div>
    )
  }
}


export default App;
