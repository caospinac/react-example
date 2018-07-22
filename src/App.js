import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "",
      data: [],
    }
  }

  onValueChange = ({ target }) => {
    this.setState({
      currentValue: target.value
    });
  }

  handleSubmitClick = () => {
    const { data } = this.state;
    let val = document.getElementById('in').value;
    this.setState({
      data: data.concat(val),
      currentValue: ""
    });
  }

  handleDeleteClick = ({ target }) => {
    const { data } = this.state;
    const i = target.value;
    if (i < 0) return;
    this.setState({
      data: data.slice(0, i).concat(data.slice(i + 1, data.length))
    });
  }

  render() {
    const { currentValue, data } = this.state;
    return (
      <div>
        <input type="text" id="in" value={currentValue} onChange={this.onValueChange} />
        <button onClick={this.handleSubmitClick}>Submit</button>
        <ul>
          {
            data.map((x, i) => (
              <li key={i}>
                <button value={i} onClick={this.handleDeleteClick}>X</button>
                <span> {x}</span>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}


export default App;
