import React, { PureComponent } from 'react';
import DataListContext from './DataListContext';
import ContextListConsumer from './ContextListConsumer';

class ContextList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      dataList: [],
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/albums").then((response) => {
      if (response.status >= 400 && response.status < 600) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then((returnedResponse) => {
      console.log(returnedResponse)
      // Your response to manipulate
      this.setState({
        complete: true,
        dataList: returnedResponse,
      });
    }).catch((error) => {
      // Your error is here!
      console.log(error)
    });
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('ContextList will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('ContextList will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('ContextList did update');
  }

  componentWillUnmount = () => {
    console.log('ContextList will unmount');
  }

  render() {
    const { dataList } = this.state;
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ContextListWrapper">
        {/* <pre>{JSON.stringify(dataList, null, '\t')}</pre> */}
        <DataListContext.ListProvider value={{ dataList }}>
          <ContextListConsumer />
        </DataListContext.ListProvider>
      </div>
    );
  }
}

ContextList.propTypes = {
  // bla: PropTypes.string,
};

ContextList.defaultProps = {
  // bla: 'test',
};

export default ContextList;
