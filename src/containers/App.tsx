import React, {Component, ChangeEvent} from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import './App.css';
import MainPage from '../components/MainPage';
import { setSearchField, requestRobots } from '../actions';
import apiCall from '../apiCall';

export interface IRobot {
    name: string;
    email: string;
    id: number;
}

interface IStoreProps {
    searchRobots: {
        searchField: string;
    };
    requestRobots: {
        robots: Array<IRobot>;
        isPending: boolean;
        error: string;
    };
}

interface IDispatchProps {
    onSearchChange(event: ChangeEvent): void;
    onRequestRobots(): Promise<void>;
}

interface IStateProps {
    searchField: string;
    robots: Array<IRobot>;
    isPending: boolean;
    error: string;
}

const mapStateToProps = (state: IStoreProps) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<IStoreProps, void, Action>) => {
    return  {
        onSearchChange: (event: ChangeEvent<HTMLInputElement>) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots(apiCall))
    }
}

type props = IStateProps & IDispatchProps;

class App extends Component<props> {

    componentDidMount() {
        console.log(process.env);
        this.props.onRequestRobots();
    }

    render() {
        return <MainPage {...this.props}/>
    };
};

export default connect<IStateProps,IDispatchProps,{},IStoreProps>(mapStateToProps, mapDispatchToProps)(App);