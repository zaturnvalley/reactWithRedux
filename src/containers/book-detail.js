import React, { Component } from 'react';
import { connect } from 'react-redux';

const imgStyle = {
  width: '200px',
  height: '300px',
  margin: '0 auto'
}

class BookDetail extends Component {
  render() {
    if(!this.props.book){
      return <div>Select a book to get started.</div>;
    }

    return (
      <div className="col-md-8"> 
        <h3>Details For:</h3>
        <div>Title: <strong>{this.props.book.title}</strong></div>
        <div>Pages: {this.props.book.pages}</div>
        <div className="col-md-6">
          <img style={imgStyle}
          src={this.props.book.img} alt={this.props.book.title}/>
        </div>
        <div>{this.props.book.about}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);