import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Button, Grid, Segment, Form } from 'semantic-ui-react'

import { fetchSearch } from '../actions'
//Pulling this data locally, unnecessary to call Yelp API for data that rarely changes
import categories from '../apis/yelpCategories.json'

import '../styles/Search.css'
import history from '../history'

export class Search extends Component {
    constructor(props) {
        super(props)

        //No need to store in redux, only used on this component
        this.state = { catList: [] }
    }

    componentDidMount() {
        const catList = []
        categories.forEach((category) => {
            if (category.parents.includes('restaurants')) {
                var newObj = {
                    key: category.alias,
                    value: category.alias,
                    text: category.title
                }
                
                catList.push(newObj)
                return true
            }
            return false
        })

        this.setState({catList})
    }
    
    rouletteOnClick = () => {
        return alert("I haven't build this yet...")
    }

    handleFormChange = (e, { name, value }) => {
        this.props.fetchSearch({ [name]: value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSearchSubmit(this.props.search.categories)
        history.push('/')
    }

    render() {
        return (
            <div className="x-search">
                <Form onSubmit={this.onFormSubmit}>
                    <Segment>
                        <Grid>
                            <Grid.Column mobile={16} tablet={8} computer={6}>
                                <Dropdown placeholder='Categories' fluid multiple search selection options={this.state.catList} onChange={this.handleFormChange} name="categories"  />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={6}>
                                {/* <Input placeholder='Search...' name="location" onChange={this.handleFormChange} /> */}
                                Currently only have functionality for lat/long based searches. Add location input later
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={2} floated="right">
                                <Button secondary onClick={this.onFormSubmit}>Search</Button>
                            </Grid.Column>
                            <Grid.Column mobile={8} tablet={8} computer={2} floated="right">
                                <Button primary onClick={this.rouletteOnClick}>Roulette</Button>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps, {
    fetchSearch
})(Search)