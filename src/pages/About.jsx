import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import './Aboutt.css'

function About() {
    const {id} = useParams();

     const [product, setprodact] = useState(null)

    useEffect(() => {
      fetch("https://dummyjson.com/product/" + id)
      .then((data) => data.json())
      .then((product) => setprodact(product))
      .catch((error) => console.log(error));
    }, []);
    console.log(product);
    let assa = '<-Next'
    return <>
        {product &&
            <div className="add">
            
                <img src={product.thumbnail} alt="" />
                <h3>{product.title}</h3>
                <h4>brand: {product.brand}</h4>
                <h4>category: {product.category}</h4>
                <p>{product.description}</p>
                <Link to='/'>{assa}</Link>
            </div>}
    </>
    
}

export default About