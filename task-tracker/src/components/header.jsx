import React from 'react'
import PropTypes from 'prop-types';
import Button from './button';

const Header = ({title,name}) => {
    // here i destructured the object so porps.title garnu ra direct porps ko object lai destructured garera leko
    const onClick=(e)=>{
      console.log("click");
}
    return (

   <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text="Add"
      onClick={onClick}
      />
      

     
    </header>
    
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
