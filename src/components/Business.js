import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Header, Grid, Placeholder, Icon } from 'semantic-ui-react'

import { fetchBusiness } from '../actions'
import Loader from './Loader'
import Map from './Map'
import history from '../history'
import '../styles/Business.css'

export class Business extends Component {
    componentDidMount() {
        const id = this.props.match.params.id

        if (id === 'undefined') {
            history.push('/404')
        }
        
        this.props.fetchBusiness(encodeURI(id))
    }

    render() {
        const business = this.props.business
        
        if (business.isLoading) {
            return (
                <div className="Business">
                    <Loader status={true} />
                </div>
            )
        }

        if (!business.id || this.props.errors) {
            return (
                <div style={{textAlign: "center", marginTop: "20px"}}>
                    <Icon name="bomb" size="massive" />
                </div>
            )
        }

        return (
            <div className="Business">
                <Divider horizontal style={{paddingBottom: "1rem"}}>
                    <Header as='h2'>{business.name}</Header>
                </Divider>

                <Grid className="business-body">
                    <Grid.Column mobile={16} tablet={8} computer={8} style={{padding: "0 1rem", height: "500px", overflow: "hidden"}}>
                        {business.image_url ? 
                            <img src={business.image_url} alt={business.name} /> :
                            <Placeholder style={{height:"500px", maxWidth: "100%"}}>
                                <Placeholder.Image />
                            </Placeholder>
                        }
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8}>
                        <Map lat={business.coordinates.latitude} long={business.coordinates.longitude} />
                    </Grid.Column>
                </Grid>

                <Grid className="business-details">
                    <Grid.Column mobile={16} tablet={8} computer={8} className="details-left">
                        <p className="details-imp">Rated {business.rating} stars</p>
                    </Grid.Column>
                    <Grid.Column mobile={16} tablet={8} computer={8} className="details-right">
                        {business.location.display_address.map(function(addressLine, i) {
                            return (
                                <p key={i} className="details-imp">{addressLine}</p>
                            )
                        })}
                        <p>{business.display_phone}</p>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    business: state.business,
    errors: state.errors
})

export default connect(
    mapStateToProps,
    {
        fetchBusiness
    }
)(Business)
