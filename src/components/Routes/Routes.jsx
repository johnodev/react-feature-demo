import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Main from '../Main';
import ReduxList from '../ReduxList';

const Routes = (props) => {
  console.log('roiuter')
  return (
  <BrowserRouter>
    <Route exact path="/" component={Main} />
    <Route path="/redux-list" component={ReduxList} />
  </BrowserRouter>
  )

};

Routes.propTypes = {
  // bla: PropTypes.string,
};

Routes.defaultProps = {
  // bla: 'test',
};

export default Routes;
