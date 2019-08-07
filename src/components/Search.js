import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Dropdown, Button, Grid, Segment, Form, Input } from 'semantic-ui-react'

import { fetchBusinesses, fetchSearch, fetchRoulette, setError } from '../actions'
//Pulling this data locally, unnecessary to call Yelp API for data that almost never changes
import categories from '../apis/yelpCategories.json'
import '../styles/Search.css'
import history from '../history'

export class Search extends Component {
    constructor(props) {
        super(props)

        //No need to store this in redux, only used on this component
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
    
    rouletteOnClick = async (categories = []) => {
        if ((this.props.search.lat === null || this.props.search.long === null) && this.props.search.location == null) {
            return this.props.setError({message: 'Please add a location or allow us to view location so we can find restaurants near you'})
        }

        //This needs a refactor, its awful but I'm bored with this project now
        if (this.props.search.locationOverride) {
            await this.props.fetchRoulette({term: 'restaurant', location: this.props.search.location, categories: this.props.search.categories.join(',')})
        } else {
            await this.props.fetchRoulette({term: 'restaurant', lat: this.props.search.lat, long: this.props.search.long, categories: this.props.search.categories.join(',')})
            
            history.push(`/business/${this.props.business.id}`)
        }
    }

    handleFormChange = (e, { name, value }) => {
        this.props.fetchSearch({ [name]: value })
    }

    onFormSubmit = (e) => {
        e.preventDefault()
        let categories = this.props.search.categories || []

        if ((this.props.search.lat === null || this.props.search.long === null) && this.props.search.location == null) {
            return this.props.setError({message: 'Please add a location or allow us to view location so we can find restaurants near you'})
        }

        if (this.props.search.locationOverride) {
            this.props.fetchBusinesses({term: 'restaurant', location: this.props.search.location, categories: categories.join(',')})
        } else {
            this.props.fetchBusinesses({term: 'restaurant', lat: this.props.search.lat, long: this.props.search.long, categories: categories.join(',')})
        }

        history.push('/')
    }

    render() {
        return (
            <div className="x-search">
                <Form>
                    <Segment>
                        <Grid>
                            <Grid.Column mobile={16} tablet={8} computer={6}>
                                <Dropdown placeholder='Categories' fluid multiple search selection options={this.state.catList} onChange={this.handleFormChange} name="categories"  />
                            </Grid.Column>
                            <Grid.Column mobile={16} tablet={8} computer={6}>
                                {this.props.search.locationOverride ? <Input placeholder='Location' name="location" onChange={this.handleFormChange} style={{border:"none", height:"2.6em"}} /> : ""}
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
        business: state.business,
        search: state.search,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {
    fetchBusinesses,
    fetchRoulette,
    fetchSearch,
    setError
})(Search)