import React from "react";
import { changeRegion, changeFilterActive } from '../redux/actions';
import { connect } from 'react-redux';
import './Filter.css';

const mapStateToProps = props => ({
  region: props.region,
  isFilterActive: props.isFilterActive
});

const mapDispatchToProps = dispatch => ({
  changeRegion: (data) => dispatch(changeRegion(data)),
  changeFilterActive: (isActive) => dispatch(changeFilterActive(isActive)),
});

const regions = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];

class Filter extends React.Component {

  render() {
    const { region, changeRegion, isFilterActive, changeFilterActive } = this.props;

    return (
      <div className="Filter">

        <div className="FilterSelect" onClick={e => changeFilterActive(!isFilterActive)}>
          <h3>{region === '' ? 'Filter by Region' : region}</h3>
          {isFilterActive ? (
            <i className="far fa-angle-up"></i>
          ) : (
            <i className="far fa-angle-down"></i>
          )}
        </div>
        <ul className={`FilterList ${isFilterActive && 'FilterShow'}`}>
          {
            regions.map(region => (
              <li 
                key={region} 
                onClick={(e) => {
                  changeRegion(e.target.textContent);
                  changeFilterActive(!isFilterActive);
                }}
              >
                {region}
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)