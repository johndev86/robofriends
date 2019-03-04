import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import ErrorBoundry from '../components/ErrorBoundry';
import './MainPage.css';


class MainPage extends Component {

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