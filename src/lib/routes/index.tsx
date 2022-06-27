/**
 * @title
 */
import React from 'react'
import {Route, Routes, HashRouter} from 'react-router-dom'
import * as Pages from '../../screens'

function Router() {
  //initalize
  return (
    <HashRouter basename="/">
      <Routes>
        <Route path="/" element={<Pages.Main />} />
        <Route path="/test" element={<Pages.Test />} />

        {/* <Route exact path="/login" component={Pages.Login} />
        <Route exact path="/mypage" component={Pages.Mypage} />
        <Route exact path="/search" component={Pages.Search} />

        <Route exact path="/guide" component={Pages.Guide} />
        <Route exact path="/guide/:id" component={Pages.Guide} /> */}
      </Routes>
    </HashRouter>
  )
}
export default Router
