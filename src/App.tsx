import React from 'react';
import { Route, RouteComponentProps, withRouter } from "react-router-dom";
import Frontpage from "./components/Frontpage/Frontpage";
import Bezos from "./components/Bezos/Bezos";
import Footer from "./components/Bezos/Footer/Footer";
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
  public renderBezos = (): JSX.Element => {
    return (
      <>
        <Bezos />
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
            path={`/bezos`}
            render={this.renderBezos}
          />
        </>
      </>
    );
  }

}

export default App;
