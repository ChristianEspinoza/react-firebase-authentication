import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';

class Navigation extends React.Component {
  constructor(props) {
    super(props)
      this.state = {

    }
  }

  render() {
    return(
      <div>
        <ul>
          <li>
            <Link to={ROUTES.SIGN_IN}>Sign In</Link>
          </li>
          {/*remove li. used to see if sign up page works*/}
          {/*
          <li>
            <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
          </li>
          */}
          <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
          </li>
          <li>
            <Link to={ROUTES.HOME}>Home</Link>
          </li>
          <li>
            <Link to={ROUTES.ACCOUNT}>Account</Link>
          </li>
          <li>
            <Link to={ROUTES.ADMIN}>Admin</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </div>

    )
  }
}

export default Navigation;
