import React from 'react'
import PropTypes from 'prop-types'



const Header = (props) => {
    const {branding} = props
    return (
        <div>

            <h1>{branding}</h1>

        </div>
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