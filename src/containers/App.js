import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import MainPage from '../components/MainPage';
import { setSearchField, requestRobots } from '../actions.js';
import apiCall from '../apiCall';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return  {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots(apiCall))
    }
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestRobots(apiCall);
    }

    render() {
        return <MainPage {...this.props}/>
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);