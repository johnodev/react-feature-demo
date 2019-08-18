import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getApiDataRequest } from 'redux/actions';
// import PropTypes from 'prop-types';
//import { Test } from './ReduxList.styles';

class ReduxList extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    this.props.getApiDataRequest();
  }

  componentDidUpdate = () => {
    console.log('ReduxList did update');
  }

  componentWillUnmount = () => {
    console.log('ReduxList will unmount');
  }

  render () {
    const { dataList } = this.props.app;

    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ReduxListWrapper">
        <pre>
          {JSON.stringify(dataList, null, '\t')}
        </pre>
      </div>
    );
  }
}

// ReduxList.propTypes = {
//   // bla: PropTypes.string,
// };

// ReduxList.defaultProps = {
//   // bla: 'test',
// };

const mapStateToProps = state => ({
  app: state.app,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getApiDataRequest,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReduxList);
