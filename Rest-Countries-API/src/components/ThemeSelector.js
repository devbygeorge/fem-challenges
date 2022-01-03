import React from 'react';
import { connect } from 'react-redux';
import { changeTheme } from '../redux/actions';
import './ThemeSelector.css';

const mapStateToProps = props => ({
  theme: props.theme,
});

const mapDispatchToProps = dispatch => ({
  changeTheme: (data) => dispatch(changeTheme(data))
});

class ThemeSelector extends React.Component {

  render() {
    const { changeTheme, theme } = this.props;
    
    return (
      <div 
        className="ThemeSelector"
        onClick={() => {
          changeTheme(theme === 'dark' ? 'light' : 'dark')
        }}
      >
        <i className={`far fa-${theme === 'dark' ? 'sun' : 'moon'}`}></i>
        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelector)