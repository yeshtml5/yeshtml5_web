/**
 * @name MAIN
 * @description
 * @refer https://reactnavigation.org/docs/material-top-tab-navigator/
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {Main} from 'components/layout'

export default function Presenter() {
  // hooks
  // Icon
  // hooks
  return (
    <Main>
      <Link to="/test">test</Link>
      <Link to="/guide">가이드</Link>
      <p className=".test">dzfkldsfljdsjl</p>
    </Main>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
