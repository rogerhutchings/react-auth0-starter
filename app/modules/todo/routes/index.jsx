import React from 'react';
import { Route } from 'react-router';

import Todo from '../containers/Todo';
import AuthenticatedComponent from '../../auth/hocs';


const todoRoutes = store => {
  return (
    <Route path="todo" component={AuthenticatedComponent(Todo)} />
  );
};

export default todoRoutes;
