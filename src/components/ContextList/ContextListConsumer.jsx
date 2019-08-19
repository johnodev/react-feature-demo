import React, { Component } from 'react';
import DataListContext from './DataListContext';

export default class MyConsumer extends Component {
    render() {
        return (
            <DataListContext.Consumer>
                {(context) => (
                    <pre>{JSON.stringify(context.value.dataList, null, '\t')}</pre>
                )}
            </DataListContext.Consumer>
        );
    }
}