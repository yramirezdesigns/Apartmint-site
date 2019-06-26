import * as React from 'react';
import './style.css';
import { ChildComponentProps } from 'google-map-react';

class MiniApartmint extends React.Component<ChildComponentProps, {}> {
  render() {
    return (
      <div className="miniApartmint">
        <div className="miniApartmintIcon" />
      </div>
    );
  }
}

export default MiniApartmint;