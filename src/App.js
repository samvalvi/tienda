import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ScrollToTop } from "./front/js/components/scroll-to-top";

import { Navbar } from "./front/js/components/navbar";
import Home from "./front/js/views/home";
import { CandleStore } from "./front/js/views/candle-store";
import { Account } from "./front/js/views/account";
import { EditForm } from "./front/js/components/edit-form";
import { RecoverPassword } from "./front/js/views/recover-password";
import { SendCode } from "./front/js/views/send-code";
import { ShopBag } from "./front/js/views/shop-bag";
import { Error404 } from "./front/js/views/error404";

import { Provider } from "react-redux";
import { store, persistor } from "./front/js/redux/store";
import {PersistGate} from "redux-persist/integration/react";

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/shop" component={CandleStore} />
          <Route path="/account" component={Account} />
          <Route path="/settings" component={EditForm} />
          <Route path="/recover-password" component={RecoverPassword} />
          <Route path="/send-code" component={SendCode} />
          <Route path="/shopbag" component={ShopBag} />
          <Route component={Error404} />
        </Switch>
      </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
