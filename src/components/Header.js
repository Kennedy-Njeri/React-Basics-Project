import React from 'react'
import PropTypes from 'prop-types'



const Header = (props) => {
    const {branding} = props
    return (
        <div>
            <h1 style={{color:'red', fontSize: '50px'}}>{branding}</h1>
        </div>
    )
}





// validation of the data received
Header.propTypes = {
    branding: PropTypes.string.isRequired
}

// default prop types...will display even if there is nothing in the header
Header.defaultProps = {
    branding: "My App"
}



export default Header