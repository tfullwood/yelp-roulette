import React, { Component } from 'react'
import { connect } from 'react-redux'

import '../styles/Search.css'
import categories from '../apis/yelpCategories.json'

export class Search extends Component {

    rouletteOnClick = () => {
        return alert("I haven't build this yet...")
    }

    render() {
        //will use this to display the categories drop down list
        // var restaurantCats = categories.filter(category => {return category.parents.includes('restaurants')})
        
        return (
            <div className="x-search">
                <div className="ui grid segment">
                    <div className="ui input six wide column">
                        <div className="ui fluid search selection dropdown">
                            <input type="hidden" name="category" />
                            <i className="dropdown icon"></i>
                            <div className="default text">Select Category</div>
                            <div className="menu">
                                <div className="item" data-value="abc">ABC</div>
                                <div className="item" data-value="def">DEF</div>
                                <div className="item" data-value="ghi">GHI</div>
                            </div>
                        </div>
                    </div>
                    <div className="ui input six wide column">
                        <input type="text" placeholder="Location" />
                    </div>

                    <div className="right floated right aligned four wide column">
                        <button className="ui button">Search</button>
                        <button className="ui primary button" onClick={this.rouletteOnClick}>Roulette</button>
                    </div>
                </div>
                
                <br /><p onClick={this.props.onClick}>Search</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        location: state.location
    }
}

export default connect(mapStateToProps)(Search)