import React from 'react';
import { Link } from 'react-router';

import LoginArea from '../../auth/containers/LoginArea';

const Header = () => (
  <header role="banner">
    <div>
      <Link to="/">Wedmin</Link>
    </div>
    <div>
      <Link to="/todo">Todos</Link>
    </div>
    <LoginArea />
  </header>
);

export default Header;
