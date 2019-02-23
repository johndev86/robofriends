import React, {Component} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        error: state.requestRobots.error
    }
}

class ErrorBoundry extends Component {

    render() {
        const {error } = this.props;
        if (error) {
            return <h1>Oooops. That is not good</h1>;
        }
        return this.props.children
    }
}
export default connect(mapStateToProps, {})(ErrorBoundry);
