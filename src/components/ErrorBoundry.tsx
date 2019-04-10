import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state:IAppState) => {
    return {
        error: state.requestRobots.error
    }
}

interface IAppProps {
    error: string;
}

interface IAppState {
    requestRobots: {
        error: string;
    }
}

class ErrorBoundry extends Component<IAppProps, IAppState> {

    render() {
        const {error } = this.props;
        if (error) {
            return <h1>Oooops. That is not good</h1>;
        }
        return this.props.children
    }
}
export default connect(mapStateToProps, {})(ErrorBoundry);
