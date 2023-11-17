/* import React from 'react' remember to remove this */
import PropTypes from 'prop-types'

function Header({ text,bgColor,textColor}) {
  const headerStyle = {backgroundColor: bgColor,color: textColor}

  return (
    <header style= {headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "rgba(0,0,0,0.4)",
    textColor: "#ff6a95"
}
/* Gives extra control, then parameter is expected as a string and will give warning/error in console */
Header.propTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
}

export default Header

