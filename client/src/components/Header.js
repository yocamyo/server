import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  renderContent() {
    switch (this.props.auth)
  }

  render() {
    return <nav>
        <div className="nav-wrapper">
          <a href="https://google.com" className="left brand-logo">
            Emaily
          </a>
          <ul className="right">
            <li>
              <a href="https://google.com">Login With Google</a>
            </li>
          </ul>
        </div>
      </nav>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);