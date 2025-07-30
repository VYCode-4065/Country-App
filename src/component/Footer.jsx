import React from 'react'

const Footer = ({darkMode}) => {
  return (
    <div className={`absolute  mt-10 left-[40%] ${darkMode?'bg-black text-white':'bg-white text-black'}`}>Made with ❤️ by Vishal Yadav</div>
  )
}

export default Footer