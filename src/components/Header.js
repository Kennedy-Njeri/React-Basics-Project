import React from 'react'
import PropTypes from 'prop-types'



const Header = (props) => {
    const {branding} = props
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">

            <div className="container">
                <a href="/" className="navbar-brand">{branding}</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="">
                            <a href="/" className="nav-link">Home</a>
                        </li>
                    </ul>

                </div>

            </div>


        </nav>

    )
}


// inline styling
//h1 style={headingStyle}>{branding}</h1>

// const headingStyle = {
//     color:'red',
//     fontSize: '20px'
// }

// validation of the data received
Header.propTypes = {
    branding: PropTypes.string.isRequired
}

// default prop types...will display even if there is nothing in the header
Header.defaultProps = {
    branding: "My App"
}



export default Header