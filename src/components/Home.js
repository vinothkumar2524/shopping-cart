import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style/HomeStyle.css'
import Category from './Categories'
import ItemCard from './ItemCard'
class Home extends Component
{   
    
    render()
    {
        console.log("home render method");
        return(
            <div className="home-container">
                <span className="welcome-text">WELCOME : {this.props.loggedInUser}</span>
                <Category />
                <ItemCard />
            </div>
        )
    }
}

const mapStateToProps = (state) =>
{
    return{
        loggedInUser : state.loggedInUser
    }
}

export default connect(mapStateToProps)(Home);