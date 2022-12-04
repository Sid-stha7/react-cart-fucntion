import React from 'react'
import PropTypes from 'prop-types';
const Header = ({title,name}) => {
    // here i destructured the object so porps.title garnu ra direct porps ko object lai destructured garera leko
  return (
    <div>
      <h1>{title}</h1>
      {/* <h1>{name}</h1> */}

    </div>
  )
}

Header.defaultProps={
    title:"Task Tracker",
   name:"John"
}
Header.protoTypes={
    title:PropTypes.string.isRequired,
}

export default Header
