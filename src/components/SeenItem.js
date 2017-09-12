import React, { Component } from 'react';
import '../css/App.css';


class SeenItem extends Component {
  constructor (props) {
    super(props);
    this.state = {showDetails: false};
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails () {
    this.setState({showDetails: !this.state.showDetails});
  }

  render() {
    var movie = this.props.dataToTransfer;
    var imgPath = require('../assets/' + movie.img + '.jpg');
    var rate = [];
    for(let i=0; i<movie.rate; i++) {
      rate.push(<i key={i} className='glyphicon glyphicon-star'></i>);
    }

    return (
      <div className="SeenItem col-xs-12 col-md-4">
        <div className='box' onClick={this.showDetails}>
          <div className='row'>
            <div className='col-xs-6'>
              <img src={imgPath}></img>
            </div>
            <div className='col-xs-6'>
              <h4>{movie.title}</h4>
              <div className='rate'>{rate}</div>
            </div>
          </div>
          {this.state.showDetails ? 
            <div className='row details'>
              <div className='col-xs-4'>
                {movie.place ? <p><i className='glyphicon glyphicon-map-marker'></i> {movie.place}</p> : null}
                {movie.date ? <p><i className='glyphicon glyphicon-calendar'></i> {movie.date}</p> : null}
                {movie.with ? <p><i className='glyphicon glyphicon-user'></i> {movie.with}</p> : null}
              </div>
              <div className='col-xs-8'>
                {movie.notes ? <p><i className='glyphicon glyphicon-pencil'></i> {movie.notes}</p> : null}
              </div>
            </div> : null
          }
        </div>
      </div>
    );
  }
}

export default SeenItem;
