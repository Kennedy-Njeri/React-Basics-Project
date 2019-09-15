import React, {Component} from 'react';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value})


    render() {
        const {name, email, phone } = this.state
        return (
            <div className="card mb-3">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" className="form-control form-control-lg" value={name} onChange={this.onChange} placeholder="Enter Name..."/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" className="form-control form-control-lg" value={email} onChange={this.onChange} placeholder="Enter Email..."/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone</label>
                            <input type="text" name="phone" className="form-control form-control-lg" value={phone} onChange={this.onChange} placeholder="Enter Phone..."/>
                        </div>
                        <input type="submit" value="Add Contact" className="btn  btn-info btn-block"/>
                    </form>
                </div>

            </div>
        );
    }
}

export default AddContact;