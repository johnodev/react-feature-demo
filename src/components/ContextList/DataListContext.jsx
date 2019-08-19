import React, { Component } from 'react'

const { Provider, Consumer } = React.createContext()

const ListProvider = (props) => (
    <Provider value={props}>
        {props.children}
    </Provider>
);


export default {
    Consumer, ListProvider
}