import Button from "./Button";

export default function ProductCard({product}){
    function handleOnclick(){
        alert ("Ouch")
    }
    return(
        
        
        <div className="card" col-4>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">{product.category}</p>

     <p className="card-text">Rwf {product.price}</p>

   <Button/>
  </div>
</div>
        
    )

}