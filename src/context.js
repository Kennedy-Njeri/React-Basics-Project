import React, {Component} from 'react'

const Context = React.createContext()

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
        ]
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