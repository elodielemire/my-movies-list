import React, { Component } from 'react';
import '../css/App.css';
import SeenItem from './SeenItem';
import ToSeeItem from './ToSeeItem';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {tabToSeeActive: true};
    this.changeTab = this.changeTab.bind(this);
    this.datas = require('../data/films.json').movies;
  }

  changeTab () {
    this.setState({tabToSeeActive: !this.state.tabToSeeActive});
  }

  render() {
    this.moviesToSee = [];
    this.moviesSeen = [];
    this.datas.map(function (movieElement, i) {
      if (movieElement.seen)
        this.moviesSeen.push(<SeenItem key={i} dataToTransfer={movieElement}></SeenItem>);
      else this.moviesToSee.push(<ToSeeItem key={i} dataToTransfer={movieElement}></ToSeeItem>);
    }.bind(this))
    var codeStr = "</>";

    return (
      <div className="App">
        <header>
          {this.state.tabToSeeActive ? <h2>Movies to see</h2> : <h2>Movies seen</h2>}
        </header>

        <div className="container">
          <nav onClick={this.changeTab}>
            {this.state.tabToSeeActive ? <div className="arrow right"><i className='glyphicon glyphicon-circle-arrow-right'></i></div> : <div className="arrow left"><i className='glyphicon glyphicon-circle-arrow-left'></i></div>}
          </nav>
        {this.state.tabToSeeActive ? <div>{this.moviesToSee}</div> : <div>{this.moviesSeen}</div>}
        </div>

        <footer>
          <p> {codeStr} with <i className='glyphicon glyphicon-heart'></i> by Elodie Lemire | <a href='https://github.com/elodielemire/my-movies-list'>Project repo</a></p>
        </footer>
        
      </div>
    );
  }
}

export default App;
