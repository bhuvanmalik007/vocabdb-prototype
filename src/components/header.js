import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { pathname } = this.props.location;

    return (
      <div>
        <Segment inverted attached>
          <Menu inverted pointing secondary size="small" >
            <Menu.Item header size="big">Mission-Admission  🚀</Menu.Item>
            <IndexLink to="/"><Menu.Item name="My Words" active={'/' === pathname} /></IndexLink>
            <Link to="/add"><Menu.Item name="Add" active={'/add' === pathname} /></Link>
            <Link to="/explore"><Menu.Item name="Explore Words" active={'/explore' === pathname} /></Link>
          </Menu>
        </Segment>
        <br/>
        {this.props.children}
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
