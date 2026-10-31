import C1 from "../Assets/images/C1.jpg";
import C2 from "../Assets/images/C2.jpg";
import C3 from "../Assets/images/C3.jpg";
import C4 from "../Assets/images/C4.jpg";


function Recommended()
{
    return(
         <div className="recommended">
        <h1 className="recommended__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div className="recommended__container">
            <div className="course-card">
                <img src={C1} alt="C1"></img>
                <h3>2023 Python Data Visualisation Masterclass</h3>
                <p>Col Steele</p>
                <p>4.3</p>
                <p>449 ⭐⭐⭐⭐<del>1999</del></p>
                
            </div>
            <div className="course-card">
                <img src={C2} alt="C2"></img>
                <h3>Course-Web Development Bootcamp 2023</h3>
                <p>Col Steele</p>
                <p>4.4</p>
                <p>649 ⭐⭐⭐⭐<del>1999</del></p>
                
            </div>
            <div className="course-card">
                <img src={C3} alt="C3"></img>
                <h3>Master UI/UX Designing with Figma 2025</h3>
                <p>Col Steele</p>
                <p>3.7</p>
                <p>799 ⭐⭐⭐<del>1999</del></p>
                
            </div>
            <div className="course-card">
                <img src={C4} alt="C4"></img>
                <h3>Basic to Advance Programming with EMC</h3>
                <p>Col Steele</p>
                <p>4.7</p>
                <p>649 ⭐⭐⭐⭐ <del>1999</del></p>
                
            </div>
           
        </div>
        </div>
        
    )
}

export default Recommended