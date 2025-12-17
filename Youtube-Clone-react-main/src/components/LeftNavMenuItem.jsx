import React from 'react'
import About from './About'
import { useNavigate, Link } from 'react-router-dom'
const LeftNavMenuItem = ({text,icon,action,className}) => {
  const navigate = useNavigate()
  const aboutClick = ()=>{
    console.log("hello");
  }
 
  return (
    <div className={`text-white text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15] ${className}`} onClick={action}>
        <span className='text-xl mr-5'>{icon}</span>
        {text}
    </div>
  )
}

export default LeftNavMenuItem