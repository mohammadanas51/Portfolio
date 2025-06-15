const MainPage = () => {
    return (
        <>
           <div className="mainParent">
            <div className="navBar w-80 ml-155">
            <ul className = "flex justify-around mt-6 cursor-pointer ">
                <li className = "transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">LinkedIn</li>
                <li className = "transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">Email</li>
                <li className = "transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">GitHub</li>
                <li className = "transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">Twitter</li> 
                <li className = "transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">Resume</li>
            </ul>
            </div>
           </div>
        </>
    )
}

export default MainPage ;
