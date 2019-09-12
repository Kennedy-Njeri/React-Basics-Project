import React, {Component} from 'react';
import Contact from "./Contact";

class Contacts extends Component {

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
        const {contacts} = this.state
        return (
            <div>

                {contacts.map(contact => (
                    <Contact key={contact.id}  contact={contact}  />
                ))}

            </div>
        );
    }
}

export default Contacts;



// property contact to be passed into Contact