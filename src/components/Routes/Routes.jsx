import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Main from 'components/Main';
import ReduxList from 'components/ReduxList';
import ContextList from 'components/ContextList';

const Routes = (props) => {
  console.log('roiuter')
  return (
  <BrowserRouter>
    <Route exact path="/" component={Main} />
    <Route path="/redux-list" component={ReduxList} />
    <Route path="/context-list" component={ContextList} />
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
