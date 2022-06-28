/**
 * @name MAIN
 * @description
 * @refer https://reactnavigation.org/docs/material-top-tab-navigator/
 */
import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {debug} from '../../lib/util'
import {increseCount} from '../../store/modules/counter'

export default function Presenter() {
  // hooks
  const dispatch = useDispatch()
  const count = useSelector((state: any) => state.counter)

  const increase = () => {
    dispatch(increseCount(count))
  }
  // Icon
  // hooks
  return (
    <div className="App">
      <h1>
        <a href="https://redux-toolkit.js.org/">https://redux-toolkit.js.org</a>{' '}
      </h1>
      {debug(count)}
      <button onClick={increase}>버튼</button>
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
