import { Link } from "react-router-dom"
import "./Productt.css"

function Product({img, id, title, description}) {
    return <>
            <Link to={`/about/${id}`} >

            <div className="lls">
            
                <img className="imgg" src={img} alt="" />
                <h3 className="hh3"> {title}</h3>
                
            </div>
         </Link>
    </>
    
}

export default Product