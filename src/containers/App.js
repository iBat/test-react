import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router';

import Header from '../components/Header';
import ListPage from '../components/ListPage';
import Home from '../components/Home';
import '../assets/stylesheets/App.scss';

export class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />

                <Route exact path="/" component={Home}/>
                <Route
                    path="/list"
                    component={() => {
                        return (
                            <ListPage
                                items={this.props.items}
                            />
                        );
                    }}
                />
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    items: PropTypes.array,
};

export default App;
