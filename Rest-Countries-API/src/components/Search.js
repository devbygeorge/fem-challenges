import React from "react";
import { searchUpdate } from '../redux/actions';
import { connect } from 'react-redux';

import './Search.css';

const mapStateToProps = props => ({
  searchValue: props.searchValue,
});

const mapDispatchToProps = dispatch => ({
  searchUpdate: (value) => dispatch(searchUpdate(value))
});

class Search extends React.Component {

  render() {
    const { searchUpdate, searchValue } = this.props;

    return (
      <div className="Search">
        <i className="far fa-search"></i>
        <input 
          type="text" 
          value={searchValue} 
          onChange={e => searchUpdate(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
