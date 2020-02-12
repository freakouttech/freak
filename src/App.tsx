import React from 'react';
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import Frontpage from "./components/Frontpage/Frontpage";
import LastMile from "./components/LastMile/LastMile";
import Footer from "./components/LastMile/Footer/Footer";
import logo from './logo.svg';
import './App.css';
// tslint:disable
declare global {
  interface Window {
    ZXing: any
  }
}
// tslint:enable
class App extends React.Component<{}, any> {
  public renderFrontpage = (): JSX.Element => {
    return (
      <>
        <Frontpage />
      </>
    );
  }
  public renderLastMile = (): JSX.Element => {
    return (
      <>
        <LastMile />
      </>
    );
  }
  public render() {
    return (
      <>
        <>
          <Route
            path={`/`}
            exact={true}
            render={this.renderFrontpage}
          />
          <Route
            path={`/lastmile`}
            render={this.renderLastMile}
          />
        </>
      </>
    );
  }

}

export default App;
