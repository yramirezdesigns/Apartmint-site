import * as React from 'react';
import './style.css';
import { RouteComponentProps } from 'react-router-dom';
import Dashboard from 'Components/DashboardLayout';
import SingelApartmint from 'Components/SingleApartmint';

const apartmintData = {
  name: 'Modern Residence in New York',
  address: ' 39 Remsen St, Brooklyn, NY 11201, USA',
  beds: 3,
  bath: 2,
  square: 20,
  img: 'http://mariusn.com/themes/reales/images/prop/1-1.png'
};

class MyapartmintPage extends React.Component<RouteComponentProps<{id: string}>, {}> {
  render() {
    return (
      <div className="myapartmintPage">
        <Dashboard>
          <div className="dashboardTitle">
            <h3>Rental ({this.props.match.params.id})</h3>
          </div>
          <div className="myApartmintWrapper">
           <SingelApartmint data={apartmintData} />
          </div>
        </Dashboard>
      </div>
    );
  }
}

export default MyapartmintPage;