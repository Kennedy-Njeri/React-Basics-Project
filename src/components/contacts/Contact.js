import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Consumer} from "../../context";
import axios from "axios";


class Contact extends Component {
    state = {
        showContactInfo: false
    }
    onDeleteClick= async (id, dispatch) => {
        //console.log("clicked")
        //this.props.deleteClickHandler()
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/{id}`)

            dispatch({type: 'DELETE_CONTACT', payload: id})
        } catch (e) {
            dispatch({type: 'DELETE_CONTACT', payload: id})
        }



    }

    // onShowClick = (e) => {
    //     this.setState({showContactInfo: !this.state.showContactInfo})
    // }

    // static propTypes = {
    //     name: PropTypes.string.isRequired,
    //     email:PropTypes.string.isRequired,
    //     phone:PropTypes.string.isRequired,
    //

    render() {

        const {id, name, email, phone } = this.props.contact
        const { showContactInfo } = this.state

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value
                return(

                    <div className="card card-body mb-3">
                        <h4>{name} <i onClick={() =>
                            this.setState({showContactInfo: !this.state.showContactInfo}) } className="fas fa-sort-down" style={{cursor: 'pointer'}}></i>

                            <i className="fas fa-times" style={{cursor: 'pointer', float:'right', color:'red'}} onClick={this.onDeleteClick.bind(this, id, dispatch)} />

                        </h4>

                        {showContactInfo ? ( <ul className="list-group">
                            <li className="list-group-item">Email: {email}</li>
                            <li className="list-group-item">Phone: {phone}</li>
                        </ul>) : null}
                    </div>
                )
                }}
            </Consumer>

        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired,
    //deleteClickHandler: PropTypes.func.isRequired
    // email:PropTypes.string.isRequired,
    // phone:PropTypes.string.isRequired,
}



export default Contact;

//<h4>{name} <i onClick={this.onShowClick.bind(this, name)} className="fas fa-sort-down"></i> </h4>