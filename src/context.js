import React, {Component} from 'react'

const Context = React.createContext()


const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE_CONTACT':
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                contact.id !==action.payload)
            }
        default:
            return state

    }

}

export class Provider extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: "Kennedy",
                email: "kennedy@gmail.com",
                phone: '0704107711'
            },
            {
                id: 2,
                name: "Mary",
                email: "mary@gmail.com",
                phone: '0704108811'
            },
            {
                id: 3,
                name: "John",
                email: "john@gmail.com",
                phone: '0704102211'
            },
        ],
        dispatch: action =>
            this.setState(state => reducer(state,action))

    }

    render() {
        return (
           <Context.Provider value={this.state}>
               {this.props.children}
           </Context.Provider>
        )
    }


}


export const Consumer = Context.Consumer