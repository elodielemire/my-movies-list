import React, { Component } from 'react';
import '../css/App.css';


class ToSeeItem extends Component {
  constructor (props) {
    super(props);
    this.sendToSeenList = this.sendToSeenList.bind(this);
  }

  sendToSeenList () {
    console.log(this.props.dataToTransfer);
    this.props.dataToTransfer.seen = true;
  }

  render() {
    var movie = this.props.dataToTransfer;
    var imgPath = require('../assets/' + movie.img + '.jpg');

    return (
      <div className="ToSeeItem col-xs-12 col-md-4">
        <div className='box' onClick={this.sendToSeenList}>
          <div className='row'>
            <div className='col-xs-6'>
              <img src={imgPath}></img>
            </div>
            <div className='col-xs-6'>
              <h4>{movie.title}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToSeeItem;
