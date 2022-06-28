/**
 * @name MAIN
 * @description
 * @refer https://reactnavigation.org/docs/material-top-tab-navigator/
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {debug} from '../../lib/util'

export default function Presenter() {
  // hooks
  const dispatch = useDispatch()
  const test1 = useSelector((state: any) => state.counter)
  console.log(test1)
  // Icon
  // hooks
  return (
    <div className="App">
      <h1>
        <a href="https://redux-toolkit.js.org/">https://redux-toolkit.js.org</a>{' '}
      </h1>
      {debug(test1)}
      <p>
        <code>src/App.tsx</code> and save to reload.
      </p>
      <Link to="/test">test</Link>
      <p className=".test">dzfkldsfljdsjl</p>
    </div>
  )
}
/**
------------------------------------------------
npx eslint --init

------------------------------------------------
 */
