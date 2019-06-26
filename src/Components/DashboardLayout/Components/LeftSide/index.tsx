import * as React from 'react';
import './style.css';
import { Icon } from 'react-fa';
import { Link } from 'react-router-dom';

interface LeftSideProps {
  isExpand: boolean;
}

class LeftSide extends React.Component<LeftSideProps, {}> {
  toggleActive = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (this.props.isExpand) {
      e.preventDefault();
    }
    const target = e.currentTarget;
    if (this.props.isExpand && target.parentElement) {
      target.parentElement.classList.toggle('active');
    }
  }
  render() {
    return (
      <div className={`leftSide slimScroll${this.props.isExpand ? ' expanded' : ' minimized'}`}>
        <nav className="leftNav scrollable bigNav">
          <ul>
            <li><Link to="/search">
              <Icon className="navIcon" name="compass" />
              <span className="navLabel">Search</span>
            </Link></li>
            <li className="hasSub hasSubActive">
              <Link to="/newrental/sell" onClick={this.toggleActive}>
                <Icon className="navIcon" name="plus-circle" />
                <span className="navLabel">Add rental</span>
                <Icon className="closeIcon arrowRight" name="angle-left" />
                <Icon className="openIcon arrowRight" name="angle-down" />
              </Link>
              <ul className="colors secondUl">
                <li><Link to="/newrental/rent">
                  Rent<Icon name="circle-o" className="icon-right" />
                </Link></li>
              </ul>
            </li>
            <li className="hasSub hasSubActive">
              <Link to="/rental/mylisting" onClick={this.toggleActive}>
                <Icon className="navIcon icon-home" name="home" />
                <span className="navLabel">Rental</span>
                <Icon className="closeIcon arrowRight" name="angle-left" />
                <Icon className="openIcon arrowRight" name="angle-down" />
              </Link>
              <ul className="colors secondUl">
                <li><Link to="/rental/mylisting">
                  My listing<Icon name="circle-o" className="icon-right" />
              </Link></li>
                <li><Link to="/rental/mywishlist">
                  My wishlist<Icon name="circle-o" className="icon-right" />
                </Link></li>
                <li><Link to="/rental/myviewing">
                  My viewing<Icon name="circle-o" className="icon-right" />
                </Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default LeftSide;
