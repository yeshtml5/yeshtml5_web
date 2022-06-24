/**
 * @title
 */
import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import * as Pages from 'pages'

function Router() {
  //initalize
  return (
    <HashRouter basename="/">
      <Switch>
        <Route exact path="/" component={Pages.Main} />
        {/* <Route exact path="/login" component={Pages.Login} />
        <Route exact path="/mypage" component={Pages.Mypage} />
        <Route exact path="/search" component={Pages.Search} />

        <Route exact path="/guide" component={Pages.Guide} />
        <Route exact path="/guide/:id" component={Pages.Guide} /> */}
      </Switch>
    </HashRouter>
  )
}
export default Router