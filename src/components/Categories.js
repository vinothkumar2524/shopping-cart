import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeCategory } from './actions/actionCreators'
import './style/CategoryStyle.css'
class Category extends Component
{
    
    handleClick(event)
    {
        console.log(event.target.value);
        this.props.changeCategory(event.target.value)
    }
    render()
    {
        console.log("Category render method");
        return(
            <div>
                <select className="category-select" onChange = {this.handleClick.bind(this)}>
                    
                    {this.props.categories.map((item)=>{
                        return (<option className="category-option">{item}</option>)
                    })}
                </select>
                
            </div>
        )
    }
}
const mapStateToProps = (state) =>
{
    return {
        categories : Object.keys(state.items)
    }
}
const mapDispatchToProps = (dispatch) =>
{
    return{
        changeCategory : (category) => {dispatch(changeCategory(category))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Category);