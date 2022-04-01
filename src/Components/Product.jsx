import React, { Component } from "react"
import { Link } from "react-router-dom"
import {DataContext} from "../Context/Context"

export class Product extends Component{

    static contextType = DataContext;

    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    render(){
        console.log(this.props)
        const {product} = this.state
        return(
            <>
            <h1>skdlfjgkldsjfglñks</h1>
                {
                    product.map(item =>(
                        <div className="" key={item._id}>
                            <img src={item.src} alt={item.title} />
                            <div className="">
                                <h2>{item.title}</h2>
                                <span>{item.price}</span>
                            </div>
                            <div>
                                <p>{item.description}</p>
                                <Link to='/Cart' className="" onClick={()=>this.context.addCart(product._id)} >
                                    Add to Cart
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </>
        )
    }
}


export default Product