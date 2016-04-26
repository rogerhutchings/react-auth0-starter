import React from 'react';
import Helmet from 'react-helmet';

// React Helmet configures things like title, meta tags etc.
// https://github.com/nfl/react-helmet
const HelmetConfig = () => (
  <Helmet
    titleTemplate="Wedmin.io - %s"
    defaultTitle="Wedmin.io"
  />
);

export default HelmetConfig;
