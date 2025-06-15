const NavBar = () => {

    const copyEmail = () =>{
        navigator.clipboard.writeText("mohammad.anas51@hotmail.com");
        alert("Email copied to clipboard");
    }

    return (
      <div className="navBar w-80 ml-155">
        <ul className="flex justify-around mt-6 cursor-pointer ">
          <li className="transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
            <a
              href="https://www.linkedin.com/in/mohammadanas51/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>

          <li
            className="transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
            onClick={copyEmail}
          >
            Email
          </li>

          <li className="transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
            <a href="https://github.com/mohammadanas51" target="_blank">
              GitHub
            </a>
          </li>

          <li className="transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
            <a href="https://x.com/MA76305" target="_blank">
              Twitter
            </a>
          </li>

          <li className="transform transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
            <a href="./resume.pdf" target="_blank" rel="noopenenr noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    );
}

export default NavBar ; 