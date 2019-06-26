import * as React from 'react';
import './Bootstrap/bootstrap.min.css';
import './style.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { getUserToken } from 'Services/Api/Token';
// import { SupportedLanguage } from 'Services/Geo';
import { connect, Dispatch } from 'react-redux';
import { RootState } from 'Redux/Store';
import { authenticate } from 'Redux/Modules/User';
import HomePage from 'Scenes/HomePage';
import WalletPage from 'Scenes/WalletPage';
import PageInfo from 'Scenes/MyInfoPage';
import SearchPage from 'Scenes/SearchPage';
import MyapartmintPage from 'Scenes/MyapartmintPage';

const mapStateToProps = (state: RootState) => ({
  // lang: state.status.lang
});
const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  authUser: () => {
    dispatch(authenticate());
  }
});

interface AppProps {
  authUser: () => void;
  // lang: SupportedLanguage;
}

class App extends React.Component<AppProps, {}> {
  componentDidMount() {
    const userToken = getUserToken();
    if (userToken) {
      this.props.authUser();
    }
  }
  render() {
    return (
      <Router>
        <div className="globalContainer">
          <Route exact={true} path="/" component={HomePage} />
          {/* <Route exact={true} path="/wallet/:action?" component={WalletPage} /> */}
          <Route exact={true} path="/search/:action?" component={SearchPage} />
          <Route exact={true} path="/property/:id?" component={MyapartmintPage} />
          <Route exact={true} path="/myprofile" component={PageInfo} />
         
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default (App);
