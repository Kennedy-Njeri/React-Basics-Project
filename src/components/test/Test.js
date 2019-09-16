import React, {Component} from 'react';

class Test extends Component {

    state = {
        title: '',
        completed: ''
    }

    componentDidMount() {
        //console.log("ComponentDidMount...")
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => this.setState({
                title:data.title,
                completed:data.completed
            }))
    }

    // componentWillMount() {
    //     console.log("ComponentWillMount...")
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("ComponentDidUpdate...")
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("ComponentDidUpdate...")
    // }
    //
    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     console.log("ComponentWillUpdate...")
    // }
    //
    // componentWillReceiveProps(nextProps, nextContext) {
    //     console.log("ComponentWillReceiveProps...")
    // }

    // static getSnapshotBeforeUpdate(prevProps, prevState) {
    // }



    render() {
        const {title, completed} = this.state
        return (
            <div>
                <h1>{title}</h1>
                <h2>Status: {completed}</h2>
            </div>
        );
    }
}

export default Test;