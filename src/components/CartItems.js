import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style/CartItemsStyle.css'
import {removeItem,addQuantity,subtractQuantity} from './actions/actionCreators'
class CartItems extends Component
{
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    handleSubtractQuantity = (id) =>{
        this.props.subtractQuantity(id);
    }
    
    render()
    {
        if(this.props.total === 0)
        {
            return(
                <span className = "cart-items-empty-text">oops! Cart seems to be empty !</span>
            )
        }
        else{
            return(
                <div className="cart-item-container">
                    
                    {this.props.addedItems.map((item) => {
                        return(
                            <div>
                                {console.log("re rendered")}
                                <img className="cart-item-image"src={item.img}></img>
                                <span className = "cart-item-name">{item.name}</span>
                                <span className = "cart-item-price">Price : {item.price} $</span>
                                <span className = "cart-item-quantity">Quantity : {item.quantity}</span>
                                <span className = "cart-item-add"onClick={()=>{this.handleAddQuantity(item.id)}}>+</span>
                                <span className = "cart-item-sub"onClick={()=>{this.handleSubtractQuantity(item.id)}}>-</span>
                                <span className = "cart-item-button" onClick = {()=>{this.handleRemove(item.id)}}>Remove</span>
                            </div>
                        )
                    })}
                </div>
            )
        }
        
    }
}
const mapStateToProps = (state)=>
{
    return{
        addedItems : state.addedItems,
        total : state.total
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CartItems)