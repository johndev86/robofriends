import React, {Component, ChangeEvent} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import Header from './Header';
import ErrorBoundry from './ErrorBoundry';
import './MainPage.css';
import {IRobot} from '../containers/App';

interface IAppProps {
    robots: Array<IRobot>;
    searchField: string;
    onSearchChange(event: ChangeEvent): void;
    isPending: boolean;
}

interface IAppState {
}

class MainPage extends Component<IAppProps, IAppState> {

    filterRobots = () => {
        return this.props.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());
        });
    }

    render() {
        
        const {onSearchChange, isPending } = this.props;

        return isPending ? 
        <h1>Loading...</h1> : 
        (
            <div className="tc">
                <Header />
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={this.filterRobots()}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    };
};

export default MainPage;