import "bootstrap/dist/css/bootstrap.min.css";
import * as React from "react";
import { CookiesProvider } from "react-cookie";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { persistor, store } from "./store/store";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </CookiesProvider>,
  document.getElementById("root"),
);

serviceWorker.unregister();
