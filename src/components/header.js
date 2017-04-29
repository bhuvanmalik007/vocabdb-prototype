import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
// import Toastr from '../containers/toastr'

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pathname } = this.props.location;

    return (
      <div>
        <Segment inverted attached>
          <Menu inverted pointing secondary size="large" stackable>
            <Menu.Item header as="h3" className="animated zoomInDown">Mission-Admission  🚀</Menu.Item>
            <IndexLink to="/" className="animated fadeInDown"><Menu.Item name="My Flashcards" active={'/' === pathname} /></IndexLink>
            <Link to="/add" className="animated fadeInDown"><Menu.Item name="Add" active={'/add' === pathname} /></Link>
            <Link to="/explore" className="animated fadeInDown"><Menu.Item name="Explore Words" active={'/explore' === pathname} /></Link>
          </Menu>
        </Segment>
        <br/>
        <div className="body">
          {/* <Toastr /> */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  location: PropTypes.object
}

Header.propTypes = {
  children: PropTypes.element
};

export default Header;
