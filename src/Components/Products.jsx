
import React, { Component } from 'react'
import { DataContext } from '../Context/Context'
import { NavLink } from 'react-router-dom';


export class Products extends Component {

   static contextType = DataContext;
    
render(){
    const {products} = this.context
    return (
      <div className='grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
              products.map(product =>(
                  <div className="w-64 rounded-xl m-4 bg-gradient-to-t from-slate-900 via-slate-500  to-slate-20" key={product._id}>
                    <NavLink to={`/Product/${product._id}`}>
                      <img className='' src={product.src} alt={product.title} />
                    </NavLink>
                    <div className='p-2'> 
                    <NavLink to={`/Product/${product._id}`}>
                        <h3 className='text-xl font-semibold p-2 text-center hover:text-white'>{product.title}</h3>
                    </NavLink>
                        <p className='text-gray-300 text-justify mb-4'>{product.content}</p>
                        <span className='text-gray-300 mx-1'>${product.price}</span>
                        <button className='bg-slate-200 rounded-xl p-1 font-semibold ring ring-sky-900 mx-10 hover:bg-slate-900 hover:text-white hover:ring-white scale-105'>
                          Add to cart
                        </button>
                    </div>
                  </div>
                  
              ))
          }
      </div>
    )
}
}

export default Products