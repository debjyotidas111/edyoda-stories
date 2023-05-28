import React from 'react'
import './Header.css';


const Header = () => {

    // function myFunction() {
    //     document.getElementById("myDropdown").classList.toggle("show");
    // }
    
    // // Close the dropdown if the user clicks outside of it
    // window.onclick = function(e) {
    //   if (!e.target.matches('.dropbtn')) {
    
    //     var dropdowns = document.getElementsByClassName("dropdown-content");
    //     for (var d = 0; d < dropdowns.length; d++) {
    //       var openDropdown = dropdowns[d];
    //       if (openDropdown.classList.contains('show')) {
    //         openDropdown.classList.remove('show');
    //       }
    //     }
    //   }
    // }



  return (
    <div>
       <header>
    <div className="navbar">

      <div className="left-section">

        <div className="logo-container">

          <p className="logo">EDYODA</p>

          <p className="logo-Stories-text">
            Stories
          </p>
        </div>

        <div className="dropdown">
          <span className="Dropdown-text">
            Explore Categories
          </span>

          <div className="Dropdown-icon">
            <i className="fa-solid fa-caret-down fa-lg dropbtn" ></i>
           
          </div>

          <div className="dropdown-content" id="myDropdown">
            <p><a>Artificial Intelligence</a></p>
            <p><a>Cloud Computing</a></p>
            <p><a>DevOps</a></p>
            <p><a>Programming Languages</a></p>
            <p><a>Mobile Application Development</a></p>
            <p><a>Technology & Tools</a></p>
            <p><a>Get A Job In A Tech Company</a></p>
            <p><a>Others</a></p>
            <p><a>All</a></p>
          </div>
        </div>
      </div>

      <div className="right-section">

        <div className="about-edyoda">
          EdYoda is a learning and knowledge
         <br></br>
          sharing platform for techies
        </div>

        <button className="navbar-btn"> Go To Main Website</button>
      </div>

    </div>

  </header>
    </div>
  )
}

export default Header
