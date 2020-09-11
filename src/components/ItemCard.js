import React, { Component } from 'react'
import { connect } from 'react-redux'
import image from '../logo192.png'
import {addToCart} from './actions/actionCreators'

import './style/cardStyle.css'
class ItemCard extends Component
{
    handleClick = (id)=>{
        this.props.addToCart(id);
        this.isAddedToCart(id);
        }

    isAddedToCart = (id)=> {
        this.props.addedItems;
    }
    render(){
        console.log("itemCard render method");
        return(
            <div>
                {this.props.items.map(item=>{
            return(
                <div className = "card">
                    <img className = "image" src={item.img}alt="image"></img>
                    <span className = "card-title">{item.name}</span>
                    <span className = "price">{item.price}$</span>
                    <div className = "addToCart" onClick={()=>{this.handleClick(item.id)}}>Add To Cart</div>
                    <span></span>
                </div>
            )
        })}
            </div>
        )
    }
}
const mapStateToProps = (state) =>
{
    let category = state. category;
    console.log(category+"super");
    if(category === "All"){
       
            state.items.map((products)=>
            {
                 products.map((items)=>
                 {
                     console.log(items);
                 })
            })
        
    }
    else{
        return {
            items : state.items[category],
        }
    }
    
}
const mapStateToProps = (state) => {
    addedItems : state.items[state.category].find(item => item.id === action.id)
} 
const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemCard); 