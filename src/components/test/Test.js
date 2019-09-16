import React, {Component} from 'react';

class Test extends Component {

    componentDidMount() {
        console.log("ComponentDidMount...")
    }

    componentWillMount() {
        console.log("ComponentWillMount...")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ComponentDidUpdate...")
    }

    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        );
    }
}

export default Test;