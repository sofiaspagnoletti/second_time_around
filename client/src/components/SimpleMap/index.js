import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import API from '../../utils/API';
import spinner from '../SimpleMap/spinner.gif';
import Geocode from "react-geocode";

const style = {
    width: '90%',
    height: '70%',

}

class SimpleMap extends Component {

    // Grabs donate-user's location
    state = {
        stocks: []
    }

    componentDidMount() {
        console.log("TRYING");
    
        // provided an address and Geocode will provide a lat and lng coordinate
        Geocode.setApiKey("AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8")
        
        Geocode.enableDebug();
        // Get latidude & longitude from address.
        Geocode.fromAddress("2210 Westlake Ave, Seattle, WA 98121").then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat, lng);
                console.log('geocode test in simple map');
            },
            error => {
                console.log('testing for errors');
                console.error(error);
            }
        );

        // Google Geolocation Position
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                position
            })
        })
    }

    donateUserLocation = query => {
        API.getAddressData(query)
            .then(res => {
                console.log('hello map testing');
                console.log(res.data);
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                {
                    this.state.position ?
                        (<Map
                            google={this.props.google}
                            style={style}
                            initialCenter={{
                                lat: this.state.position.coords.latitude,
                                lng: this.state.position.coords.longitude
                            }}
                            zoom={10}
                            onClick={this.onMapClicked}
                        >
                            <Marker onClick={this.onMarkerClick}
                                name={'Current location'}/>
                            <InfoWindow onClose={this.onInfoWindowClose}>
                            </InfoWindow>
                        </Map >) : (
                            <img src={spinner} alt="spinner" />
                        )       
                }
            </div >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyC43qVzPHXSL3TaW4zNV8Kwu6a3PdmLcp8"
})(SimpleMap)


