import React from "react"
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { searchUpdate, changeRegion, changeFilterActive } from '../redux/actions';

import ThemeSelector from './ThemeSelector'
import './Header.css';

const mapDispatchToProps = dispatch => ({
  changeRegion: (data) => dispatch(changeRegion(data)),
  searchUpdate: (value) => dispatch(searchUpdate(value)),
  changeFilterActive: (isActive) => dispatch(changeFilterActive(isActive)),
});


class Header extends React.Component {

  render() {
    const { searchUpdate, changeRegion, changeFilterActive } = this.props;

    return (
      <div className="Header">
        <div className="container">
          <Link to="/" onClick={e => {
            searchUpdate("");
            changeRegion("");
            changeFilterActive(false);
          }}>
            <h1>Where in the world?</h1>
          </Link>
          <ThemeSelector />
        </div>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Header)