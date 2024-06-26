import { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";

function home(){
       const [products, setprodacts] = useState(null)

    useEffect(() => {
      fetch("https://dummyjson.com/product")
      .then((data) => data.json())
      .then((products) => setprodacts(products))
      .catch((error) => console.log(error));
    }, []);

    return <>
    
    <h1>hello</h1>
    {products && <ProductsList products={products} />}
      
    </>
}

export default home