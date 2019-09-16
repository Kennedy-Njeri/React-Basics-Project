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

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ComponentDidUpdate...")
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        console.log("ComponentWillUpdate...")
    }

    componentWillReceiveProps(nextProps, nextContext) {
        console.log("ComponentWillReceiveProps...")
    }

    // static getSnapshotBeforeUpdate(prevProps, prevState) {
    // }



    render() {
        return (
            <div>
                <h1>Test</h1>
            </div>
        );
    }
}

export default Test;