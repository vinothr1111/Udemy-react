function Navbar()
{
  return(
    <div class="navbar">
        <div className="navbar__s1">
            <h1 className="navbar__s1__title">Udemy</h1>
        </div>
        <div className="navbar__s2">
            <i className="fa-solid fa-magnifying-glass fa-jello" style={{color: "rgb(0, 0, 0);"}}></i>
            <input placeholder="Search for anything here. Tech,Business,Art..."></input>
        </div>
        <div className="navbar__s3">
            <p className="Courses">Courses</p>
             <div className="mylearning">
                <p>My Learning</p>
                <div className="mylearning__popup">
                    <p>You have nothing in your cart</p>
                </div>
             </div>
            <i className="fa-solid fa-cart-shopping" style={{color: "rgb(0, 0, 0);"}}></i>
            <i className="fa-solid fa-bell" style={{color: "rgb(0, 0, 0);"}}></i>
            <i className="fa-solid fa-user" style={{color: "rgb(0, 0, 0);"}}></i>
        </div>
        <div className="navbar__s4">
            <i className="fa-duotone fa-solid fa-bars" style={{"--fa-primary-color": "rgb(0, 0, 0); --fa-secondary-color: rgb(0, 0, 0);"}}></i>

        </div>
        </div>
  )
} 

export default Navbar