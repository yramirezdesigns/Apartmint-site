import * as React from 'react';
import './style.css';
import GoogleMapReact, { Coords } from 'google-map-react';
import MiniApartmint from './Components/MiniApartmint';

interface SearchMapState {
  center: Coords;
  zoom: number;
}

class SearchMap extends React.Component<{}, SearchMapState> {
  constructor() {
    super();
    this.state = {
      center: {lat: 10.766748, lng: 106.705785},
      zoom: 15
    };
  }
  onMapChange = (newMapState: SearchMapState) => {
    this.setState(newMapState);
  }
  render() {
    return (
      <div className="searchMap">
        <GoogleMapReact
          center={this.state.center}
          zoom={this.state.zoom}
          onChange={this.onMapChange}
          bootstrapURLKeys={{
            key: 'AIzaSyBuinFicS4HAGfIKW6rRutGFP9GWcReUn4'
          }}
        >
          <MiniApartmint lat={10.766748} lng={106.705785} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SearchMap;