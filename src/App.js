import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {ScrollToTop} from './front/js/components/scroll-to-top'

import {Navbar} from './front/js/components/navbar'
import Home from './front/js/views/home'
import {CandleStore} from './front/js/views/candle-store'
import {Account} from './front/js/views/account'
import {EditForm} from './front/js/components/edit-form'
import {DeleteAccount} from './front/js/components/delete-account'
import {UpdatePassword} from './front/js/components/update-password'
import {RecoverPassword} from './front/js/components/recover-password'
import {SendCode} from './front/js/components/send-code'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/shop" exact component={CandleStore} />
        <Route path="/account" exact component={Account} />
        <Route path="/settings/edit" exact component={EditForm} />
        <Route path="/settings/delete" exact component={DeleteAccount} />
        <Route  path="/settings/update" exact component={UpdatePassword} />
        <Route path="/recover" exact component={RecoverPassword} />
        <Route path="/send" exact component={SendCode} />
      </Switch>
    </Router>
  );
}

export default App;
