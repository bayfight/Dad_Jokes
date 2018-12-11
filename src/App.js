import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state ={
        setup: '',
        lucu: ''
    }
}
  render() {
    let klik = () => {
      let url = `https://safe-falls-22549.herokuapp.com/random_joke`
      axios.get(url)
      .then((info) => {
          this.setState({
              setup: info.data.setup,
              lucu: info.data.punchline
          })
      })
  }
    return (
      <div>
        <div className="col-lg-12">
        <div className="row">
        <div className="container">
        <div className="col-lg-6 ml">
        <div id="background">
            <div className="row">
            <div id="cardJokes" className=" card bg-white ml mt-5">
            <h3 className="pt-5 pl-1 pr-3" align="right">{this.state.setup}</h3>
            <p className="pl-1 pr-3" align="right">{this.state.lucu}</p>
            <button type="button" class="btn btn-danger pt-2 mr-2" onClick={klik}>Reload  <i class="fas fa-sync-alt"></i></button>
            </div>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
