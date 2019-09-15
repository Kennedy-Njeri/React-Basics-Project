import React, {Component} from 'react';
import {Consumer} from "../../context";
import uuid from 'uuid'
import TextInputGroup from "../layout/TextInputGroup";



class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault()
        const {name, email, phone} = this.state

        const neContact = {
            id: uuid(),
            name: name,
            email: email,
            phone: phone
        }
        dispatch({type: 'ADD_CONTACT', payload:neContact})
        //console.log(this.state)

        this.setState({
            name: '',
            email: '',
            phone: ''
        })

    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        const {name, email, phone } = this.state

        return(
            <Consumer>

                {value => {
                    const {dispatch} = value
                    return(

                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup label="Name" value={name} placeholder="Enter Name" onChange={this.onChange} name="name" />
                                    <TextInputGroup label="Email" value={email} placeholder="Enter Email" type="email" onChange={this.onChange} name="email" />
                                    <TextInputGroup label="Phone" value={phone} placeholder="Enter Phone" onChange={this.onChange} name="phone" />
                                    <input type="submit" value="Add Contact" className="btn  btn-info btn-block"/>
                                </form>
                            </div>

                        </div>
                    )
                }}





            </Consumer>
        )



    }
}

export default AddContact;