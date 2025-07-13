import React from 'react'

function NavBar() {
  return (
    <div className="navParent flex justify-center ">
        <div className="h-10 bg-white/10 backdrop-blur text-white flex items-center mt-5 w-200 md:w-200 sm:w-100  rounded">
        <div className="mx-auto">
            <ul className="flex justify-center space-x-4 cursor-pointer">
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
    </div>
    </div>
    
       
  )
}

export default NavBar