
import React, { Component } from 'react'
import { DataContext } from '../Context/Context'

export class Products extends Component {

   static contextType = DataContext;
    
render(){
    const {products} = this.context
    return (
      <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
          {
              products.map(product =>(
                  <div className="w-64 rounded-xl m-4 bg-gradient-to-t from-slate-900 via-slate-600  to-slate-20" key={product._id}>
                      <img className='' src={product.src} alt={product.title} />
                    <div className='p-2'> 
                        <h3 className='text-xl font-semibold p-2 text-center'>{product.title}</h3>
                        <p className='text-gray-300 text-justify mb-4'>{product.content}</p>
                        <span className='text-gray-300 mx-1'>${product.price}</span>
                        <button className='bg-slate-200 rounded-xl p-1 font-semibold ring ring-sky-900 mx-10 hover:bg-slate-900 hover:text-white hover:ring-white hover:scale-105'>Add to cart</button>
                    </div>
                  </div>
                  
              ))
          }
      </div>
    )
}
}

export default Products