import React, {Component} from 'react';
import {Consumer} from "../../context";

import TextInputGroup from "../layout/TextInputGroup";
import axios from "axios";



class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {

        }
    }

    onSubmit = (dispatch, e) => {
        e.preventDefault()
        const {name, email, phone} = this.state

        // Check For Errors
        if(name === ''){
            this.setState({errors: {name: 'Name is Required'}})
            return
        }

        if(email === ''){
            this.setState({errors: {email: 'Email is Required'}})
            return;
        }

        if(phone === ''){
            this.setState({errors: {phone: 'Phone is Required'}})
            return;
        }


        const neContact = {
            name: name,
            email: email,
            phone: phone
        }

        axios.post('https://jsonplaceholder.typicode.com/users', neContact).then(res =>   dispatch({type: 'ADD_CONTACT', payload:res.data}))


        //console.log(this.state)

        // clear fields after submit
        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        })


        this.props.history.push('/')

    }


    onChange = (e) => this.setState({[e.target.name]: e.target.value})

    render() {
        const {name, email, phone, errors } = this.state

        return(
            <Consumer>

                {value => {
                    const {dispatch} = value
                    return(

                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup label="Name" value={name} placeholder="Enter Name" onChange={this.onChange} name="name" error={errors.name} />
                                    <TextInputGroup label="Email" value={email} placeholder="Enter Email" type="email" onChange={this.onChange} name="email" error={errors.email} />
                                    <TextInputGroup label="Phone" value={phone} placeholder="Enter Phone" onChange={this.onChange} name="phone" error={errors.phone} />
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