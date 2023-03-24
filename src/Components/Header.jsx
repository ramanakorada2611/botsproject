import React from 'react'
import "./Header.css"
import { AiOutlineMenu} from 'react-icons/ai'
import { AiOutlineMessage} from 'react-icons/ai'
const Header = () => {
  return (

    <div className='header'>
        {/* <span style={{marginTop:"10px"}}></span>
        <span className='title'>OutLook Mail</span> */}
        
          <ul>
            <li><AiOutlineMenu  size="30px"/></li>
            <li>OutLook Mail</li>
          </ul>
          <div className='message'><AiOutlineMessage size="30px"/></div>
        
    </div>
  )
}

export default Header