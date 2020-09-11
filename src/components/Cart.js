import React, { Component } from 'react';
import { connect } from 'react-redux'
import CartItems from './CartItems'
import './style/CartStyle.css'
class Cart extends Component
{
    render()
    {
        console.log("cart render method");
            return(
                <div className="cart-container"> 
                    <div className="cart"> 
                        <ul className="cart-collection">
                           <CartItems/> 
                        </ul>
                    </div>  
                    <span className="cart-span-text">Total : {this.props.total} $</span>
                    {console.log(" reached cart quantity display")}
                    <div className="cart-button">Order</div>
                </div>
           )
    }
}

const mapStateToProps = (state)=>{
    return{
        total: state.total
    }
}

export default connect(mapStateToProps)(Cart)