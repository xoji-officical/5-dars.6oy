import Product from "./Product";

function ProductsList( {products}) {
    return <>{
        products.products.map((product) =>{
      const {title, id, description, thumbnail } = product;
      return <Product key={id} img={thumbnail} title={title} description={description} id={id} />
     
     })
    }</>
}

export default ProductsList