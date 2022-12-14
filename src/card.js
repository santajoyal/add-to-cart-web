function Card({product,addToCart,cartItems}){
    return  <div className='col-lg-4 border p-3 mt-2'>
    <div className='row'>
      <div className='col-lg-12'>
        <img className='img-fluid' style={{width:"200px" , height:"200px"}} src={product.img_url} />
      </div>
      <div className='col-lg-12'>
        <h3>{product.name}</h3>
        <h6>price Rs. {product.price}</h6>
        <button disabled={cartItems.some(obj => obj.id===product.id)} onClick={()=>{addToCart(product)}} className='btn btn-sm btn-primary'>
          {
            cartItems.some(obj => obj.id===product.id) ? "Added to cart" : "Add to cart"
          }
        </button>
      </div>
    </div>
  </div>
  
}

export default Card;

//destructuring
// let props ={
//     product :{}
// }

// let{product}= props;
// console.log(product)