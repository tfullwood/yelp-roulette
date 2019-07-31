import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN

class Map extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      lng: props.long,
      lat: props.lat,
      zoom: 15
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    })

    map.on('move', () => {
      const { lng, lat } = map.getCenter()

      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      })
    })

    map.on("load", () => {
        this.setState({
          lng: this.props.long.toFixed(4),
          lat: this.props.lat.toFixed(4),
          zoom: map.getZoom().toFixed(2)
        })
        const { lng, lat } = map.getCenter()

        map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
            if (error) throw error
            map.addImage("custom-marker", image)
        
            map.addLayer({
                id: "markers",
                type: "symbol",
                source: {
                    type: "geojson",
                    data: {
                        type: 'FeatureCollection',
                        features: [{
                            type: 'Feature',
                            properties: {},
                            geometry: {
                                type: "Point",
                                coordinates: [lng, lat]
                            }
                        }]
                    }
                },
                layout: {
                    "icon-image": "custom-marker",
                }
            })
        })
    })
  }

  render() {
    const { lng, lat, zoom } = this.state

    return (
      <div>
        <div className="inline-block absolute top left mt12 ml12 bg-darken75 color-white z1 py6 px12 round-full txt-s txt-bold">
          <div>{`Longitude: ${lng} Latitude: ${lat} Zoom: ${zoom}`}</div>
        </div>
        <div ref={el => this.mapContainer = el} className="absolute top right left bottom" style={{height: '500px', margin: "0 1rem"}} />
      </div>
    )
  }
}

export default Map