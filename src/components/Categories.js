import saleimage from "../Assets/images/sale.image.jpg";

function Categories()
{
    return(
        <><div className="categories">
            <p>Development</p>
            <p>Business</p>
            <p>IT & Software</p>
            <p>Personl Development</p>
            <p>Design</p>
            <p>Marketing</p>
        </div><div className="sale-image">
                <img src={saleimage} alt="Udemy flash sale banner"></img>
                <div className="sale-image2">
                    <h2>Udemy Flash Sale!!! 24 hours to save</h2>
                    <p>Get the top Courses for just 499.Just one day to save but a lifetime to learn...</p>
                </div>
            </div></>
    )
}

export default Categories