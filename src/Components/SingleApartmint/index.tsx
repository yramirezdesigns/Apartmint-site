import * as React from 'react';
import './style.css';

interface SingleApartmintProps {
  data: any;
}

class SingleApartmint extends React.Component<SingleApartmintProps, {}> {
  render() {
    return (
      <div className="singleApartmint">
        <a href="#" className="card">
          <div className="figure">
            <img src={this.props.data.img} alt="image" />
            <div className="figCaption">
              <div>$2,800</div>
              <span className="icon-eye"> 200</span>
              <span className="icon-heart"> 54</span>
              <span className="icon-bubble"> 13</span>
            </div>
            <div className="figView"><span className="icon-eye" /></div>
            <div className="figType">FOR RENT</div>
          </div>
          <h2>{this.props.data.name}</h2>
          <div className="cardAddress"><span className="icon-pointer" />
            {this.props.data.address}
            </div>
          <ul className="cardFeat">
            <li><span className="fa fa-moon-o" /> {this.props.data.beds}</li>
            <li><span className="icon-drop" /> {this.props.data.bath}</li>
            <li><span className="icon-frame" /> {this.props.data.square} Sq Ft</li>
          </ul>
        </a>
      </div>
    );
  }
}

export default SingleApartmint;